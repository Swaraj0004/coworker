import express, { Application } from "express";
import cors from "cors";
import spaceRoutes from "./routes/space.routes";
import authRoutes from "./routes/auth.routes";
import reviewRoutes from "./routes/review.routes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/spaces", spaceRoutes);
app.use("/api/reviews", reviewRoutes);

export default app;
