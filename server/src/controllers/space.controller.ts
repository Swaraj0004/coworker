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

const normalizeOptionalString = (value: unknown) => {
  if (value === undefined) {
    return undefined;
  }

  const normalized = String(value || "").trim();
  return normalized || undefined;
};

const areValidCoordinates = (latitude: number, longitude: number) => {
  return (
    Number.isFinite(latitude) &&
    Number.isFinite(longitude) &&
    latitude >= -90 &&
    latitude <= 90 &&
    longitude >= -180 &&
    longitude <= 180
  );
};

const geocodeIndianAddress = async (address?: string, city?: string, state?: string) => {
  const query = [address, city, state, "India"].filter(Boolean).join(", ");
  if (!query) {
    return null;
  }

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&countrycodes=in&q=${encodeURIComponent(query)}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "Space-Now/1.0 owner-space-geocoder"
        }
      }
    );

    if (!response.ok) {
      return null;
    }

    const results = (await response.json()) as Array<{ lat?: string; lon?: string }>;
    const exactLocation = results[0];
    if (!exactLocation?.lat || !exactLocation?.lon) {
      return null;
    }

    const latitude = Number(exactLocation.lat);
    const longitude = Number(exactLocation.lon);

    if (!areValidCoordinates(latitude, longitude)) {
      return null;
    }

    return { latitude, longitude };
  } catch {
    return null;
  }
};

const uploadSingleFile = (file: Express.Multer.File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "space-now/spaces"
      },
      (error, result) => {
        if (error || !result) {
          reject(
            new Error(
              typeof error === "object" &&
                error !== null &&
                "message" in error &&
                typeof (error as { message?: unknown }).message === "string"
                ? (error as { message: string }).message
                : "Photo upload failed"
            )
          );
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
  } catch (error) {
    const message =
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof (error as { message?: unknown }).message === "string"
        ? (error as { message: string }).message
        : error instanceof Error
          ? error.message
          : "Photo upload failed";
    return res.status(500).json({ message });
  }
};

export const geocodeSpaceAddress = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const address = normalizeOptionalString(req.body.address);
    const city = normalizeOptionalString(req.body.city);
    const state = normalizeOptionalString(req.body.state);

    if (!address || !city || !state) {
      return res.status(400).json({ message: "Address, city and state are required" });
    }

    const exactLocation = await geocodeIndianAddress(address, city, state);
    if (!exactLocation) {
      return res.status(404).json({ message: "No exact map result found for this address" });
    }

    return res.json(exactLocation);
  } catch {
    return res.status(500).json({ message: "Server error" });
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
      const seatSignal =
        space.availableSeats > 0 ? `${space.availableSeats} seats available` : "No seats available";
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

    const normalizedCity = normalizeOptionalString(city);
    const normalizedState = normalizeOptionalString(state);
    const normalizedAddress = normalizeOptionalString(address);
    const fallbackLatitude = Number(latitude);
    const fallbackLongitude = Number(longitude);
    const geocodedLocation = await geocodeIndianAddress(
      normalizedAddress,
      normalizedCity,
      normalizedState
    );

    const finalLatitude = geocodedLocation?.latitude ?? fallbackLatitude;
    const finalLongitude = geocodedLocation?.longitude ?? fallbackLongitude;

    if (!areValidCoordinates(finalLatitude, finalLongitude)) {
      return res.status(400).json({
        message: "A valid address location or valid latitude and longitude are required"
      });
    }

    const space = await Space.create({
      name,
      pricePerMonth: Number(pricePerMonth),
      availableSeats: Number(availableSeats),
      location: {
        type: "Point",
        coordinates: [finalLongitude, finalLatitude]
      },
      city: normalizedCity,
      state: normalizedState,
      address: normalizedAddress,
      overview: normalizeOptionalString(overview),
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

    const existingSpace = await Space.findOne({
      _id: req.params.id,
      ownerId: req.user.id
    });

    if (!existingSpace) {
      return res.status(404).json({ message: "Space not found or not owned by you" });
    }

    const nextCity = city !== undefined ? normalizeOptionalString(city) : existingSpace.city;
    const nextState = state !== undefined ? normalizeOptionalString(state) : existingSpace.state;
    const nextAddress = address !== undefined ? normalizeOptionalString(address) : existingSpace.address;
    const geocodedLocation = await geocodeIndianAddress(nextAddress, nextCity, nextState);

    const space = await Space.findOneAndUpdate(
      {
        _id: req.params.id,
        ownerId: req.user.id
      },
      {
        ...(name !== undefined ? { name } : {}),
        ...(pricePerMonth !== undefined ? { pricePerMonth: Number(pricePerMonth) } : {}),
        ...(availableSeats !== undefined ? { availableSeats: Number(availableSeats) } : {}),
        ...(city !== undefined ? { city: nextCity } : {}),
        ...(state !== undefined ? { state: nextState } : {}),
        ...(address !== undefined ? { address: nextAddress } : {}),
        ...(overview !== undefined ? { overview: normalizeOptionalString(overview) } : {}),
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
          : {}),
        ...(geocodedLocation
          ? {
              location: {
                type: "Point",
                coordinates: [geocodedLocation.longitude, geocodedLocation.latitude]
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
