import { Request, Response } from "express";
import Space from "../models/Space";

export const getNearbySpaces = async (
  req: Request,
  res: Response
) => {
  try {
    const { lat, lng } = req.query;

    const spaces = await Space.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [
              Number(lng),
              Number(lat)
            ]
          },
          $maxDistance: 5000
        }
      }
    });

    res.json(spaces);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
