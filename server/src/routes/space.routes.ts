import { Router } from "express";
import { authenticate, requireRole } from "../middleware/auth.middleware";
import { spaceImageUpload } from "../middleware/upload.middleware";
import {
  createSpace,
  deleteOwnerSpace,
  geocodeSpaceAddress,
  getIndiaCityStats,
  getNearbySpaces,
  getOwnerEnquiryNotifications,
  getOwnerSpaces,
  getSpaceById,
  updateOwnerSpace,
  uploadSpacePhotos
} from "../controllers/space.controller";

const router = Router();

router.get("/nearby", getNearbySpaces);
router.get("/cities/india", getIndiaCityStats);
router.get("/owner/me", authenticate, requireRole("owner"), getOwnerSpaces);
router.get("/owner/enquiries", authenticate, requireRole("owner"), getOwnerEnquiryNotifications);
router.post("/geocode", authenticate, requireRole("owner"), geocodeSpaceAddress);
router.post(
  "/upload-photo",
  authenticate,
  requireRole("owner"),
  spaceImageUpload.array("photos", 8),
  uploadSpacePhotos
);
router.get("/:id", getSpaceById);
router.post("/", authenticate, requireRole("owner"), createSpace);
router.put("/:id", authenticate, requireRole("owner"), updateOwnerSpace);
router.delete("/:id", authenticate, requireRole("owner"), deleteOwnerSpace);

export default router;
