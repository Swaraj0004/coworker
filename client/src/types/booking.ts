export interface BookingUserRef {
  _id: string;
  name?: string;
  username?: string;
  email?: string;
}

export interface BookingSpaceRef {
  _id: string;
  name?: string;
  city?: string;
  state?: string;
  pricePerMonth?: number;
  photos?: string[];
}

export interface Booking {
  _id: string;
  userId: string | BookingUserRef;
  spaceId: string | BookingSpaceRef;
  date: string;
  seatsBooked: number;
  status: "confirmed" | "cancelled";
  createdAt?: string;
  updatedAt?: string;
}

export interface OwnerAnalytics {
  totalSpaces: number;
  totalAvailableSeats: number;
  avgPrice: number;
  totalBookings: number;
  upcomingBookings: number;
  totalSeatsBooked: number;
}
