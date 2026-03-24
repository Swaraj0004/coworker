import app from "../server/src/app";
import connectDB from "../server/src/config/db";

let isReady = false;

export default async function handler(req: any, res: any) {
  if (!isReady) {
    await connectDB();
    isReady = true;
  }

  return app(req, res);
}
