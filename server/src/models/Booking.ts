import mongoose, { Document, Schema, Types } from "mongoose";

export interface BookingDocument extends Document {
  userId: Types.ObjectId;
  spaceId: Types.ObjectId;
  date: Date;
  seatsBooked: number;
  status: "confirmed" | "cancelled";
  createdAt?: Date;
  updatedAt?: Date;
}

const bookingSchema = new Schema<BookingDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    spaceId: {
      type: Schema.Types.ObjectId,
      ref: "Space",
      required: true,
      index: true
    },
    date: {
      type: Date,
      required: true
    },
    seatsBooked: {
      type: Number,
      required: true,
      min: 1
    },
    status: {
      type: String,
      enum: ["confirmed", "cancelled"],
      default: "confirmed"
    }
  },
  { timestamps: true }
);

bookingSchema.index({ userId: 1, spaceId: 1, date: 1 }, { unique: false });

export default mongoose.model<BookingDocument>("Booking", bookingSchema);
