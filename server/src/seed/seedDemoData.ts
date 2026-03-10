import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mongoose, { Types } from "mongoose";
import Review from "../models/Review";
import Space from "../models/Space";
import User from "../models/User";

dotenv.config();

type CityConfig = {
  name: string;
  state: string;  lat: number;
  lng: number;
  count: number;
  priceBase: number;
};

const cityConfigs: CityConfig[] = [
  { name: "Mumbai", state: "Maharashtra", lat: 19.076, lng: 72.8777, count: 22, priceBase: 12500 },
  { name: "Bengaluru", state: "Karnataka", lat: 12.9716, lng: 77.5946, count: 24, priceBase: 11800 },
  { name: "Hyderabad", state: "Telangana", lat: 17.385, lng: 78.4867, count: 19, priceBase: 10100 },

  { name: "Nagpur", state: "Maharashtra", lat: 21.1458, lng: 79.0882, count: 12, priceBase: 5600 },
  { name: "Jaipur", state: "Rajasthan", lat: 26.9124, lng: 75.7873, count: 11, priceBase: 6100 },
  { name: "Indore", state: "Madhya Pradesh", lat: 22.7196, lng: 75.8577, count: 14, priceBase: 5900 }
];

const ownerCount = 34;
const userCount = 24;

const amenityPool = [
  "WiFi",
  "Air Conditioning",
  "Free Coffee",
  "Free Tea",
  "Personal Lockers",
  "Phone Booth",
  "Printing",
  "Parking",
  "Meeting Rooms",
  "Community Events",
  "Free Drinking Water",
  "Power Backup"
];

const adjectives = [
  "Prime",
  "Urban",
  "Elevate",
  "Catalyst",
  "Vertex",
  "Nexus",
  "Orbit",
  "Sprint",
  "Collective",
  "Launch"
];

const nouns = [
  "Workspace",
  "Cowork Hub",
  "Business Center",
  "Studios",
  "Work Lounge",
  "Office Loft"
];

const sampleReviews = [
  "Great ambience and reliable internet. Perfect for focused work.",
  "Friendly staff, clean desk zones, and smooth check-in process.",
  "Meeting rooms are well-equipped and the location is convenient.",
  "Good value for money with a professional work environment.",
  "Community events helped me network with founders and freelancers."
];

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min: number, max: number) {
  return Number((Math.random() * (max - min) + min).toFixed(1));
}

function pickMany<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function createOwnerDocs() {
  const owners = Array.from({ length: ownerCount }, (_, idx) => ({
    name: `Owner ${String(idx + 1).padStart(2, "0")}`,
    email: `owner${idx + 1}@spacenow.dev`,
    username: `owner${idx + 1}`,
    mobile: `900000${String(idx + 1).padStart(4, "0")}`,
    city: "Mumbai",
    state: "Maharashtra",
    role: "owner" as const,
    officeAddress: `Business Park ${idx + 1}, Mumbai`,
    officeNumber: `022${String(400000 + idx).padStart(6, "0")}`
  }));

  owners.unshift({
    name: "Swaraj Blubox",
    email: "swaraj@blubox",
    username: "swaraj_blubox",
    mobile: "9876543210",
    city: "Nagpur",
    state: "Maharashtra",
    role: "owner" as const,
    officeAddress: "Blubox HQ, Nagpur",
    officeNumber: "07122334455"
  });

  return owners;
}

function createUserDocs() {
  return Array.from({ length: userCount }, (_, idx) => ({
    name: `User ${String(idx + 1).padStart(2, "0")}`,
    email: `user${idx + 1}@spacenow.dev`,
    username: `user${idx + 1}`,
    mobile: `800000${String(idx + 1).padStart(4, "0")}`,
    city: "Pune",
    state: "Maharashtra",
    role: "user" as const
  }));
}

type OwnerAllocation = {
  ownerId: Types.ObjectId;
  cityNames: Set<string>;
  spaces: number;
};

async function seedDemoData() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB for fake database seed");

    await Promise.all([
      Review.deleteMany({}),
      Space.deleteMany({}),
      User.deleteMany({
        $or: [
          { email: { $regex: "@(spacenow\\.dev|coworker\\.dev)$", $options: "i" } },
          { email: "swaraj@blubox" }
        ]
      })
    ]);

    const hashedPassword = await bcrypt.hash("Pass@123", 10);

    const ownerDocs = await User.insertMany(
      createOwnerDocs().map((owner) => ({ ...owner, password: hashedPassword, emailVerified: true }))
    );

    const userDocs = await User.insertMany(
      createUserDocs().map((user) => ({ ...user, password: hashedPassword, emailVerified: true }))
    );

    const remainingByCity = new Map<string, number>();
    cityConfigs.forEach((city) => remainingByCity.set(city.name, city.count));

    const ownerAllocations: OwnerAllocation[] = ownerDocs.map((owner) => ({
      ownerId: owner._id,
      cityNames: new Set<string>(),
      spaces: 0
    }));

    const spacesPayload: any[] = [];

    for (const allocation of ownerAllocations) {
      const citiesSorted = [...cityConfigs]
        .filter((city) => (remainingByCity.get(city.name) || 0) > 0)
        .sort((a, b) => (remainingByCity.get(b.name) || 0) - (remainingByCity.get(a.name) || 0));

      if (citiesSorted.length < 3) {
        break;
      }

      const selectedCities = citiesSorted.slice(0, 3);

      for (const city of selectedCities) {
        const remaining = remainingByCity.get(city.name) || 0;
        if (remaining <= 0) continue;

        remainingByCity.set(city.name, remaining - 1);
        allocation.cityNames.add(city.name);
        allocation.spaces += 1;

        const adjective = adjectives[randomInt(0, adjectives.length - 1)];
        const noun = nouns[randomInt(0, nouns.length - 1)];
        const officeName = `${adjective} ${city.name} ${noun}`;

        const coworkingPrice = city.priceBase + randomInt(-1200, 1600);
        const servicedOfficePrice = coworkingPrice + randomInt(12000, 26000);
        const privateOfficePrice = coworkingPrice + randomInt(6000, 14000);
        const virtualOfficePrice = randomInt(1500, 4500);

        const latShift = (Math.random() - 0.5) * 0.12;
        const lngShift = (Math.random() - 0.5) * 0.12;

        const amenityHighlights = pickMany(amenityPool, randomInt(8, 11));

        spacesPayload.push({
          name: officeName,
          pricePerMonth: coworkingPrice,
          availableSeats: randomInt(8, 60),
          location: {
            type: "Point",
            coordinates: [Number((city.lng + lngShift).toFixed(6)), Number((city.lat + latShift).toFixed(6))]
          },
          amenities: {
            wifi: true,
            ac: Math.random() > 0.12,
            parking: Math.random() > 0.25
          },
          city: city.name,
          state: city.state,          address: `${randomInt(10, 780)}, ${city.name} Business District, ${city.state}`,
          overview:
            `${officeName} is designed for startups, freelancers, and distributed teams. ` +
            `You get ergonomic seating, productive ambiance, and flexible plans in ${city.name}.`,
          amenityHighlights,
          photos: Array.from({ length: 6 }, (_, i) => `https://picsum.photos/seed/${city.name}-${officeName}-${i}/1200/800`),
          pricing: {
            servicedOffice: servicedOfficePrice,
            coworkingSpace: coworkingPrice,
            privateOffice: privateOfficePrice,
            virtualOffice: virtualOfficePrice
          },
          rating: randomFloat(4.1, 4.9),
          reviewCount: randomInt(6, 70),
          ratingBreakdown: {
            location: randomFloat(4.0, 5),
            wifi: randomFloat(4.0, 5),
            productivity: randomFloat(4.0, 5),
            comfort: randomFloat(3.8, 5),
            community: randomFloat(3.6, 5),
            amenities: randomFloat(4.0, 5)
          },
          ownerId: allocation.ownerId
        });
      }
    }

    const leftovers = [...remainingByCity.entries()].filter(([, remaining]) => remaining > 0);

    for (const [cityName, remaining] of leftovers) {
      const city = cityConfigs.find((c) => c.name === cityName);
      if (!city) continue;

      for (let i = 0; i < remaining; i += 1) {
        const owner = ownerAllocations.find((o) => o.spaces < 4 && !o.cityNames.has(city.name)) || ownerAllocations.find((o) => o.spaces < 4) || ownerAllocations[randomInt(0, ownerAllocations.length - 1)];

        owner.cityNames.add(city.name);
        owner.spaces += 1;

        const adjective = adjectives[randomInt(0, adjectives.length - 1)];
        const noun = nouns[randomInt(0, nouns.length - 1)];
        const officeName = `${adjective} ${city.name} ${noun}`;

        const coworkingPrice = city.priceBase + randomInt(-1000, 1500);

        const latShift = (Math.random() - 0.5) * 0.12;
        const lngShift = (Math.random() - 0.5) * 0.12;

        spacesPayload.push({
          name: officeName,
          pricePerMonth: coworkingPrice,
          availableSeats: randomInt(8, 60),
          location: {
            type: "Point",
            coordinates: [Number((city.lng + lngShift).toFixed(6)), Number((city.lat + latShift).toFixed(6))]
          },
          amenities: {
            wifi: true,
            ac: Math.random() > 0.12,
            parking: Math.random() > 0.25
          },
          city: city.name,
          state: city.state,          address: `${randomInt(10, 780)}, ${city.name} Business District, ${city.state}`,
          overview:
            `${officeName} supports day passes, monthly hot desks, and private cabins in ${city.name}.`,
          amenityHighlights: pickMany(amenityPool, randomInt(8, 11)),
          photos: Array.from({ length: 6 }, (_, photoIdx) => `https://picsum.photos/seed/${city.name}-${officeName}-${photoIdx}/1200/800`),
          pricing: {
            servicedOffice: coworkingPrice + randomInt(12000, 26000),
            coworkingSpace: coworkingPrice,
            privateOffice: coworkingPrice + randomInt(6000, 14000),
            virtualOffice: randomInt(1500, 4500)
          },
          rating: randomFloat(4.1, 4.9),
          reviewCount: randomInt(6, 70),
          ratingBreakdown: {
            location: randomFloat(4.0, 5),
            wifi: randomFloat(4.0, 5),
            productivity: randomFloat(4.0, 5),
            comfort: randomFloat(3.8, 5),
            community: randomFloat(3.6, 5),
            amenities: randomFloat(4.0, 5)
          },
          ownerId: owner.ownerId
        });
      }

      remainingByCity.set(city.name, 0);
    }

    const swarajOwner = ownerDocs.find((owner) => owner.email === "swaraj@blubox");
    if (swarajOwner) {
      spacesPayload.push({
        name: "Bluebox Signature Workspace",
        pricePerMonth: 8900,
        availableSeats: 26,
        location: {
          type: "Point",
          coordinates: [79.0882, 21.1458]
        },
        amenities: {
          wifi: true,
          ac: true,
          parking: true
        },
        city: "Nagpur",
        state: "Maharashtra",
        address: "18, IT Park Road, Nagpur, Maharashtra",
        overview:
          "Bluebox Signature Workspace offers flexible desks, private cabins, and meeting rooms for teams in Nagpur.",
        amenityHighlights: [
          "WiFi",
          "Air Conditioning",
          "Parking",
          "Meeting Rooms",
          "Printing",
          "Free Coffee",
          "24x7 Access"
        ],
        photos: [
          "https://picsum.photos/seed/bluebox-signature-1/1200/800",
          "https://picsum.photos/seed/bluebox-signature-2/1200/800",
          "https://picsum.photos/seed/bluebox-signature-3/1200/800"
        ],
        pricing: {
          servicedOffice: 22800,
          coworkingSpace: 8900,
          privateOffice: 14900,
          virtualOffice: 2900
        },
        rating: 4.7,
        reviewCount: 18,
        ratingBreakdown: {
          location: 4.8,
          wifi: 4.7,
          productivity: 4.6,
          comfort: 4.7,
          community: 4.5,
          amenities: 4.6
        },
        ownerId: swarajOwner._id
      });
    }
    const insertedSpaces = await Space.insertMany(spacesPayload);

    const reviewPayload = insertedSpaces.flatMap((space) => {
      const count = randomInt(2, 6);
      return Array.from({ length: count }, () => {
        const user = userDocs[randomInt(0, userDocs.length - 1)];
        return {
          userId: user._id,
          spaceId: space._id,
          rating: randomInt(4, 5),
          comment: sampleReviews[randomInt(0, sampleReviews.length - 1)],
          isFake: false,
          confidenceScore: 0.12
        };
      });
    });

    await Review.insertMany(reviewPayload);

    const summary = cityConfigs.map((city) => ({
      city: city.name,      total: insertedSpaces.filter((s: any) => s.city === city.name).length
    }));

    console.table(summary);

    console.log("Fake database seeded successfully");
    console.log(`Owners created: ${ownerDocs.length}`);
    console.log(`Users created: ${userDocs.length}`);
    console.log(`Spaces created: ${insertedSpaces.length}`);
    console.log(`Reviews created: ${reviewPayload.length}`);
    console.log("Login password for seeded users: Pass@123");

    process.exit(0);
  } catch (error) {
    console.error("Fake database seed failed", error);
    process.exit(1);
  }
}

seedDemoData();

