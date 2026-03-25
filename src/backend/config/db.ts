import mongoose from "mongoose";

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var __mongooseCache: MongooseCache | undefined;
}

const getMongoUri = () => {
  const uri = process.env.MONGO_URI?.trim();
  if (!uri) {
    throw new Error("MONGO_URI is missing. Set it in root .env and Vercel environment variables.");
  }
  return uri;
};

const cache = global.__mongooseCache || { conn: null, promise: null };
global.__mongooseCache = cache;

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose;
    }

    if (cache.conn) {
      return cache.conn;
    }

    if (!cache.promise) {
      const mongoUri = getMongoUri();
      cache.promise = mongoose.connect(mongoUri).then((m) => m);
    }

    cache.conn = await cache.promise;
    return cache.conn;
  } catch (error) {
    cache.promise = null;
    cache.conn = null;
    console.error("MongoDB connection failed", error);
    throw error;
  }
};

export default connectDB;
