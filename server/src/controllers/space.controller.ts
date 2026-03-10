import { Response } from "express";
import cloudinary, { isCloudinaryConfigured } from "../config/cloudinary";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import Space from "../models/Space";

const normalizeStringArray = (value: unknown): string[] | undefined => {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const cleaned = value
    .map((item) => String(item || "").trim())
    .filter((item) => item.length > 0);

  return cleaned.length ? cleaned : undefined;
};

const uploadSingleFile = (file: Express.Multer.File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "space-now/spaces"
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error("Upload failed"));
          return;
        }

        resolve(result.secure_url);
      }
    );

    stream.end(file.buffer);
  });
};

export const uploadSpacePhotos = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (!isCloudinaryConfigured) {
      return res.status(500).json({
        message:
          "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET."
      });
    }

    const files = (req.files as Express.Multer.File[]) || [];

    if (!files.length) {
      return res.status(400).json({ message: "Please upload at least one image" });
    }

    const urls = await Promise.all(files.map((file) => uploadSingleFile(file)));

    return res.json({ urls });
  } catch {
    return res.status(500).json({ message: "Photo upload failed" });
  }
};

export const getNearbySpaces = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const lat = Number(req.query.lat);
    const lng = Number(req.query.lng);
    const radiusKm = Number(req.query.radiusKm ?? 0);

    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      return res.status(400).json({ message: "lat and lng are required numbers" });
    }

    if (radiusKm <= 0) {
      const allSpaces = await Space.find({}).sort({ createdAt: -1 });
      return res.json(allSpaces);
    }

    const maxDistance = radiusKm * 1000;

    const spaces = await Space.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [lng, lat]
          },
          $maxDistance: maxDistance
        }
      }
    }).sort({ createdAt: -1 });

    return res.json(spaces);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getIndiaCityStats = async (_req: AuthenticatedRequest, res: Response) => {
  try {
    const stats = await Space.aggregate([
      {
        $match: {
          city: { $exists: true, $ne: null }
        }
      },
      {
        $group: {
          _id: {
            city: "$city",
            state: "$state"
          },
          avgPrice: { $avg: "$pricePerMonth" },
          spaces: { $sum: 1 },
          lat: { $avg: { $arrayElemAt: ["$location.coordinates", 1] } },
          lng: { $avg: { $arrayElemAt: ["$location.coordinates", 0] } }
        }
      },
      {
        $project: {
          _id: 0,
          city: "$_id.city",
          state: "$_id.state",
          avgPrice: { $round: ["$avgPrice", 0] },
          spaces: 1,
          lat: { $round: ["$lat", 6] },
          lng: { $round: ["$lng", 6] }
        }
      },
      {
        $sort: {
          city: 1
        }
      }
    ]);

    return res.json(stats);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getOwnerEnquiryNotifications = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const spaces = await Space.find({ ownerId: req.user.id }).sort({ updatedAt: -1 });

    const notifications = spaces.map((space, index) => {
      const seatSignal = space.availableSeats > 0 ? `${space.availableSeats} seats available` : "No seats available";
      const placeLabel = [space.city, space.state].filter(Boolean).join(", ") || "Unspecified location";

      return {
        id: `${space._id}-enquiry-${index}`,
        type: "enquiry",
        title: `New enquiry for ${space.name}`,
        message: `A potential client checked ${space.name} (${placeLabel}). Current desk starts at Rs ${space.pricePerMonth}/month with ${seatSignal}.`,
        spaceId: String(space._id),
        createdAt: space.updatedAt || space.createdAt
      };
    });

    return res.json(notifications);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getSpaceById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const space = await Space.findById(req.params.id);

    if (!space) {
      return res.status(404).json({ message: "Space not found" });
    }

    return res.json(space);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const createSpace = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const {
      name,
      pricePerMonth,
      availableSeats,
      latitude,
      longitude,
      city,
      state,
      address,
      overview,
      amenityHighlights,
      photos,
      pricing,
      amenities
    } = req.body;

    if (
      !name ||
      pricePerMonth === undefined ||
      availableSeats === undefined ||
      latitude === undefined ||
      longitude === undefined
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const space = await Space.create({
      name,
      pricePerMonth: Number(pricePerMonth),
      availableSeats: Number(availableSeats),
      location: {
        type: "Point",
        coordinates: [Number(longitude), Number(latitude)]
      },
      city: city ? String(city).trim() : undefined,
      state: state ? String(state).trim() : undefined,
      address: address ? String(address).trim() : undefined,
      overview: overview ? String(overview).trim() : undefined,
      amenityHighlights: normalizeStringArray(amenityHighlights),
      photos: normalizeStringArray(photos),
      pricing: pricing
        ? {
            servicedOffice:
              pricing.servicedOffice !== undefined ? Number(pricing.servicedOffice) : undefined,
            coworkingSpace:
              pricing.coworkingSpace !== undefined ? Number(pricing.coworkingSpace) : undefined,
            privateOffice:
              pricing.privateOffice !== undefined ? Number(pricing.privateOffice) : undefined,
            virtualOffice:
              pricing.virtualOffice !== undefined ? Number(pricing.virtualOffice) : undefined
          }
        : undefined,
      amenities: {
        wifi: Boolean(amenities?.wifi),
        ac: Boolean(amenities?.ac),
        parking: Boolean(amenities?.parking)
      },
      ownerId: req.user.id
    });

    return res.status(201).json(space);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getOwnerSpaces = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const spaces = await Space.find({ ownerId: req.user.id }).sort({ createdAt: -1 });
    return res.json(spaces);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateOwnerSpace = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const {
      name,
      pricePerMonth,
      availableSeats,
      city,
      state,
      address,
      overview,
      amenityHighlights,
      photos,
      pricing,
      amenities
    } = req.body;

    const space = await Space.findOneAndUpdate(
      {
        _id: req.params.id,
        ownerId: req.user.id
      },
      {
        ...(name !== undefined ? { name } : {}),
        ...(pricePerMonth !== undefined ? { pricePerMonth: Number(pricePerMonth) } : {}),
        ...(availableSeats !== undefined ? { availableSeats: Number(availableSeats) } : {}),
        ...(city !== undefined ? { city: String(city || "").trim() || undefined } : {}),
        ...(state !== undefined ? { state: String(state || "").trim() || undefined } : {}),
        ...(address !== undefined ? { address: String(address || "").trim() || undefined } : {}),
        ...(overview !== undefined ? { overview: String(overview || "").trim() || undefined } : {}),
        ...(amenityHighlights !== undefined
          ? { amenityHighlights: normalizeStringArray(amenityHighlights) }
          : {}),
        ...(photos !== undefined ? { photos: normalizeStringArray(photos) } : {}),
        ...(pricing !== undefined
          ? {
              pricing: {
                servicedOffice:
                  pricing.servicedOffice !== undefined
                    ? Number(pricing.servicedOffice)
                    : undefined,
                coworkingSpace:
                  pricing.coworkingSpace !== undefined
                    ? Number(pricing.coworkingSpace)
                    : undefined,
                privateOffice:
                  pricing.privateOffice !== undefined ? Number(pricing.privateOffice) : undefined,
                virtualOffice:
                  pricing.virtualOffice !== undefined ? Number(pricing.virtualOffice) : undefined
              }
            }
          : {}),
        ...(amenities !== undefined
          ? {
              amenities: {
                wifi: Boolean(amenities.wifi),
                ac: Boolean(amenities.ac),
                parking: Boolean(amenities.parking)
              }
            }
          : {})
      },
      { new: true }
    );

    if (!space) {
      return res.status(404).json({ message: "Space not found or not owned by you" });
    }

    return res.json(space);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteOwnerSpace = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const deleted = await Space.findOneAndDelete({
      _id: req.params.id,
      ownerId: req.user.id
    });

    if (!deleted) {
      return res.status(404).json({ message: "Space not found or not owned by you" });
    }

    return res.json({ message: "Space deleted successfully" });
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};
