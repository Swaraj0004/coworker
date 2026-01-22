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
  comment: string;
  rating: number;
  isFake?: boolean;
  confidence?: number;
}

export interface Space {
  name: string;
  pricePerMonth: number;
  availableSeats: number;
  location: Location;
  amenities: Amenities;
  reviews?: Review[];
}
