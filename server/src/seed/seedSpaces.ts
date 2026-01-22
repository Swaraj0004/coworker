import mongoose from "mongoose";
import dotenv from "dotenv";
import Space from "../models/Space";

dotenv.config();

const spaces = [
  {
    name: "WorkSquare Coworking",
    pricePerMonth: 4500,
    availableSeats: 18,
    location: {
      type: "Point",
      coordinates: [79.0882, 21.1458] // Nagpur
    },
    amenities: {
      wifi: true,
      ac: true,
      parking: true
    },
    reviews: [
      {
        rating: 5,
        comment: "Very professional workspace with fast internet.",
        isFake: false
      },
      {
        rating: 5,
        comment: "BEST COWORKING EVER MUST JOIN!!!",
        isFake: true,
        confidence: 0.92
      }
    ]
  },
  {
    name: "The Startup Bay",
    pricePerMonth: 6000,
    availableSeats: 6,
    location: {
      type: "Point",
      coordinates: [79.0797, 21.1502]
    },
    amenities: {
      wifi: true,
      ac: true,
      parking: false
    },
    reviews: [
      {
        rating: 4,
        comment: "Good atmosphere, slightly crowded during evenings.",
        isFake: false
      }
    ]
  },
  {
    name: "Innovate Hub",
    pricePerMonth: 3500,
    availableSeats: 0,
    location: {
      type: "Point",
      coordinates: [79.0925, 21.1396]
    },
    amenities: {
      wifi: true,
      ac: false,
      parking: false
    },
    reviews: [
      {
        rating: 3,
        comment: "Affordable but limited amenities.",
        isFake: false
      }
    ]
  },
  {
    name: "CoLab Space",
    pricePerMonth: 7000,
    availableSeats: 25,
    location: {
      type: "Point",
      coordinates: [79.1021, 21.1543]
    },
    amenities: {
      wifi: true,
      ac: true,
      parking: true
    },
    reviews: [
      {
        rating: 5,
        comment: "Premium coworking with excellent community events.",
        isFake: false
      }
    ]
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    console.log("✅ MongoDB connected for seeding");

    await Space.deleteMany({});
    console.log("🗑️ Existing spaces removed");

    await Space.insertMany(spaces);
    console.log("🌱 Coworking spaces seeded successfully");

    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed", error);
    process.exit(1);
  }
}

seed();
