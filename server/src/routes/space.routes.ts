import { Router } from "express";
import {
  createSpace,
  deleteOwnerSpace,
  getIndiaCityStats,
  getNearbySpaces,
  getOwnerSpaces,
  getSpaceById,
  updateOwnerSpace
} from "../controllers/space.controller";
import { authenticate, requireRole } from "../middleware/auth.middleware";

const router = Router();

router.get("/nearby", getNearbySpaces);
router.get("/cities/india", getIndiaCityStats);
router.get("/owner/me", authenticate, requireRole("owner"), getOwnerSpaces);
router.get("/:id", getSpaceById);
router.post("/", authenticate, requireRole("owner"), createSpace);
router.put("/:id", authenticate, requireRole("owner"), updateOwnerSpace);
router.delete("/:id", authenticate, requireRole("owner"), deleteOwnerSpace);

export default router;
