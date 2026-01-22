import express, { Application } from "express";
import cors from "cors";
import spaceRoutes from "./routes/space.routes";

const app: Application = express();

app.use(cors());                 // ✅ IMPORTANT
app.use(express.json());

app.use("/api/spaces", spaceRoutes);

export default app;
