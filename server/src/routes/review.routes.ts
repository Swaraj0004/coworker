import { Router } from "express";
import { createReview, getReviewsBySpace } from "../controllers/review.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.get("/:spaceId", getReviewsBySpace);
router.post("/", authenticate, createReview);

export default router;
