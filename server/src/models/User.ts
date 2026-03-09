import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  username: string;
  mobile: string;
  city: string;
  state: string;
  password: string;
  role: "user" | "owner" | "admin";
  emailVerified: boolean;
  officeAddress?: string;
  officeNumber?: string;
}

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    username: { type: String, required: true, unique: true, lowercase: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "owner", "admin"],
      default: "user"
    },
    emailVerified: { type: Boolean, default: false },
    officeAddress: { type: String },
    officeNumber: { type: String }
  },
  { timestamps: true }
);

export default mongoose.model<UserDocument>("User", userSchema);
