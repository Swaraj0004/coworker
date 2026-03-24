import "dotenv/config";
import type { Request, Response } from "express";
import app from "../server/src/app";
import connectDB from "../server/src/config/db";

let isReady = false;

export default async function handler(req: Request, res: Response) {
  if (!isReady) {
    await connectDB();
    isReady = true;
  }

  return app(req, res);
}
