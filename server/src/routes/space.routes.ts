import { Router } from "express";
import { getNearbySpaces } from "../controllers/space.controller";

const router = Router();

router.get("/nearby", getNearbySpaces);

export default router;
