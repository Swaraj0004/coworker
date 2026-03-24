import type { NextApiRequest, NextApiResponse } from "next";
import app from "../../server/src/app";
import connectDB from "../../server/src/config/db";

let isReady = false;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isReady) {
    await connectDB();
    isReady = true;
  }

  return app(req as any, res as any);
}
