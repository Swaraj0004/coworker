import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import Review from "../models/Review";
import Space from "../models/Space";
import { detectFakeReview } from "../services/fakeReview.service";

export const createReview = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { spaceId, rating, comment } = req.body;

    if (!spaceId || !rating || !comment?.trim()) {
      return res.status(400).json({ message: "spaceId, rating, and comment are required" });
    }

    if (Number(rating) < 1 || Number(rating) > 5) {
      return res.status(400).json({ message: "rating must be between 1 and 5" });
    }

    const space = await Space.findById(spaceId);
    if (!space) {
      return res.status(404).json({ message: "Space not found" });
    }

    const prediction = detectFakeReview(comment);

    const review = await Review.create({
      userId: req.user.id,
      spaceId,
      rating: Number(rating),
      comment: comment.trim(),
      isFake: prediction.isFake,
      confidenceScore: prediction.confidenceScore
    });

    const populated = await review.populate({ path: "userId", select: "name" });

    return res.status(201).json(populated);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getReviewsBySpace = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const reviews = await Review.find({ spaceId: req.params.spaceId })
      .populate({ path: "userId", select: "name" })
      .sort({ createdAt: -1 });

    return res.json(reviews);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};
