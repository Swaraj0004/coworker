import mongoose, { Schema, Document } from "mongoose";
import { Space } from "../types/space.types";

interface SpaceDocument extends Space, Document {}

const spaceSchema = new Schema<SpaceDocument>({
  name: { type: String, required: true },

  pricePerMonth: { type: Number, required: true },

  availableSeats: { type: Number, required: true },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },

  amenities: {
    wifi: Boolean,
    ac: Boolean,
    parking: Boolean
  },

  reviews: [
    {
      comment: String,
      rating: Number,
      isFake: Boolean,
      confidence: Number
    }
  ]
});

spaceSchema.index({ location: "2dsphere" });

export default mongoose.model<SpaceDocument>("Space", spaceSchema);
