import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import authRoutes from "./routes/auth.routes";
import reviewRoutes from "./routes/review.routes";
import spaceRoutes from "./routes/space.routes";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/spaces", spaceRoutes);
app.use("/api/reviews", reviewRoutes);

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  const message = err instanceof Error ? err.message : "Internal server error";
  console.error("[API ERROR]", err);
  res.status(500).json({ message });
});

export default app;
