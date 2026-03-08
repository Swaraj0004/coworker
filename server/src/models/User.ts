import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  role: "user" | "owner" | "admin";
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "owner", "admin"],
    default: "user"
  }
});

export default mongoose.model<UserDocument>("User", userSchema);
