import { Router } from "express";
import { authenticate, requireRole } from "../middleware/auth.middleware";
import {
  createSpaceLead,
  getMyNotifications,
  markNotificationRead,
  respondToLeadNotification
} from "../controllers/notification.controller";

const router = Router();

router.get("/me", authenticate, getMyNotifications);
router.patch("/:id/read", authenticate, markNotificationRead);
router.patch("/:id/respond", authenticate, requireRole("owner", "admin"), respondToLeadNotification);
router.post("/spaces/:id/lead", authenticate, requireRole("user", "owner"), createSpaceLead);

export default router;
