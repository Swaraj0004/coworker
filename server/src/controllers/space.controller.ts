import { Response } from "express";
import Space from "../models/Space";
import { AuthenticatedRequest } from "../middleware/auth.middleware";

export const getNearbySpaces = async (
  req: AuthenticatedRequest,
  res: Response
) => {
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

    res.json(spaces);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const getIndiaCityStats = async (_req: AuthenticatedRequest, res: Response) => {
  try {
    const stats = await Space.aggregate([
      {
        $match: {
          city: { $exists: true, $ne: null },
          tier: { $in: ["Tier 1", "Tier 2"] }
        }
      },
      {
        $group: {
          _id: {
            city: "$city",
            state: "$state",
            tier: "$tier"
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
          tier: "$_id.tier",
          avgPrice: { $round: ["$avgPrice", 0] },
          spaces: 1,
          lat: { $round: ["$lat", 6] },
          lng: { $round: ["$lng", 6] }
        }
      },
      {
        $sort: {
          tier: 1,
          city: 1
        }
      }
    ]);

    return res.json(stats);
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

    res.json(space);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const createSpace = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { name, pricePerMonth, availableSeats, latitude, longitude, amenities } = req.body;

    if (!name || pricePerMonth === undefined || availableSeats === undefined || latitude === undefined || longitude === undefined) {
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
      amenities: {
        wifi: Boolean(amenities?.wifi),
        ac: Boolean(amenities?.ac),
        parking: Boolean(amenities?.parking)
      },
      ownerId: req.user.id
    });

    res.status(201).json(space);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const getOwnerSpaces = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const spaces = await Space.find({ ownerId: req.user.id }).sort({ createdAt: -1 });
    res.json(spaces);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateOwnerSpace = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { name, pricePerMonth, availableSeats, amenities } = req.body;

    const space = await Space.findOneAndUpdate(
      {
        _id: req.params.id,
        ownerId: req.user.id
      },
      {
        ...(name !== undefined ? { name } : {}),
        ...(pricePerMonth !== undefined ? { pricePerMonth: Number(pricePerMonth) } : {}),
        ...(availableSeats !== undefined ? { availableSeats: Number(availableSeats) } : {}),
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

    res.json(space);
  } catch {
    res.status(500).json({ message: "Server error" });
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

    res.json({ message: "Space deleted successfully" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
