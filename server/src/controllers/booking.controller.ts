import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import Booking from "../models/Booking";
import Notification from "../models/Notification";
import Space from "../models/Space";

export const createBooking = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { date, seatsBooked } = req.body as { date?: string; seatsBooked?: number };
    const parsedSeats = Number(seatsBooked);
    const parsedDate = date ? new Date(date) : null;

    if (!parsedDate || Number.isNaN(parsedDate.getTime())) {
      return res.status(400).json({ message: "Valid booking date is required" });
    }

    if (!Number.isInteger(parsedSeats) || parsedSeats <= 0) {
      return res.status(400).json({ message: "seatsBooked must be a positive integer" });
    }

    const now = new Date();
    if (parsedDate.getTime() < now.getTime() - 60 * 1000) {
      return res.status(400).json({ message: "Booking date cannot be in the past" });
    }

    const space = await Space.findById(req.params.spaceId);
    if (!space) {
      return res.status(404).json({ message: "Space not found" });
    }

    if (space.verificationStatus && space.verificationStatus !== "verified") {
      return res.status(400).json({ message: "Booking allowed only for verified spaces" });
    }

    if (space.availableSeats < parsedSeats) {
      return res.status(400).json({ message: "Requested seats exceed currently available seats" });
    }

    const booking = await Booking.create({
      userId: req.user.id,
      spaceId: space._id,
      date: parsedDate,
      seatsBooked: parsedSeats,
      status: "confirmed"
    });

    space.availableSeats -= parsedSeats;
    await space.save();

    if (space.ownerId) {
      await Notification.create({
        recipientUserId: space.ownerId,
        actorUserId: req.user.id,
        spaceId: space._id,
        type: "system",
        title: `New booking for ${space.name}`,
        message: `A user booked ${parsedSeats} seat(s) on ${parsedDate.toLocaleDateString("en-IN")} for ${space.name}.`
      });
    }

    await Notification.create({
      recipientUserId: req.user.id,
      actorUserId: req.user.id,
      spaceId: space._id,
      type: "system",
      title: `Booking confirmed for ${space.name}`,
      message: `Your booking for ${parsedSeats} seat(s) on ${parsedDate.toLocaleDateString("en-IN")} is confirmed.`
    });

    return res.status(201).json(booking);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getMyBookings = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const bookings = await Booking.find({ userId: req.user.id })
      .populate({ path: "spaceId", select: "name city state pricePerMonth photos" })
      .sort({ createdAt: -1 });

    return res.json(bookings);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getOwnerBookings = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const ownerSpaces = await Space.find({ ownerId: req.user.id }).select("_id name city state pricePerMonth");
    const ownerSpaceIds = ownerSpaces.map((space) => space._id);

    const bookings = await Booking.find({ spaceId: { $in: ownerSpaceIds } })
      .populate({ path: "userId", select: "name username email" })
      .populate({ path: "spaceId", select: "name city state pricePerMonth" })
      .sort({ createdAt: -1 });

    return res.json(bookings);
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const cancelBooking = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    const space = await Space.findById(booking.spaceId);
    const isOwnerOfSpace = space && String(space.ownerId || "") === req.user.id;
    const isBooker = String(booking.userId) === req.user.id;
    const isAdmin = req.user.role === "admin";

    if (!isBooker && !isOwnerOfSpace && !isAdmin) {
      return res.status(403).json({ message: "Forbidden" });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({ message: "Booking is already cancelled" });
    }

    booking.status = "cancelled";
    await booking.save();

    if (space) {
      space.availableSeats += booking.seatsBooked;
      await space.save();
    }

    return res.json({ message: "Booking cancelled", booking });
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getOwnerAnalytics = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const ownerSpaces = await Space.find({ ownerId: req.user.id }).select(
      "_id pricePerMonth availableSeats"
    );
    const spaceIds = ownerSpaces.map((space) => space._id);

    const [bookingStats] = await Booking.aggregate([
      { $match: { spaceId: { $in: spaceIds }, status: "confirmed" } },
      {
        $group: {
          _id: null,
          totalBookings: { $sum: 1 },
          seatsBooked: { $sum: "$seatsBooked" }
        }
      }
    ]);

    const upcomingCount = await Booking.countDocuments({
      spaceId: { $in: spaceIds },
      status: "confirmed",
      date: { $gte: new Date() }
    });

    const totalSpaces = ownerSpaces.length;
    const totalAvailableSeats = ownerSpaces.reduce((sum, space) => sum + space.availableSeats, 0);
    const avgPrice =
      totalSpaces > 0
        ? Math.round(ownerSpaces.reduce((sum, space) => sum + space.pricePerMonth, 0) / totalSpaces)
        : 0;
    const totalBookings = bookingStats?.totalBookings || 0;
    const totalSeatsBooked = bookingStats?.seatsBooked || 0;

    return res.json({
      totalSpaces,
      totalAvailableSeats,
      avgPrice,
      totalBookings,
      upcomingBookings: upcomingCount,
      totalSeatsBooked
    });
  } catch {
    return res.status(500).json({ message: "Server error" });
  }
};
