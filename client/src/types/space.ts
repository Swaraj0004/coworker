export interface Location {
  type: "Point";
  coordinates: [number, number]; // [lng, lat]
}

export interface Amenities {
  wifi: boolean;
  ac: boolean;
  parking: boolean;
}

export interface Review {
  _id?: string;
  comment: string;
  rating: number;
  isFake?: boolean;       // ⭐ ML result
  confidence?: number;   // ⭐ ML confidence
  createdAt?: string;
}

export interface Space {
  _id: string;
  name: string;
  description?: string;
  pricePerMonth: number;
  location: {
    type: "Point";
    coordinates: [number, number];
  };
  amenities: {
    wifi: boolean;
    ac: boolean;
    parking: boolean;
  };
  availableSeats: number;
  reviews?: Review[];     // ⭐ ADD THIS
}

