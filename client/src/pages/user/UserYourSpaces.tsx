import { useEffect, useState } from "react";
import {
  formatMembershipPlan,
  getUserMemberships,
  payMembership,
  removeMembership,
  updateMembershipStatus
} from "../../utils/memberships";
import { cancelBooking, fetchMyBookings } from "../../services/api";
import type { Booking, BookingSpaceRef } from "../../types/booking";

function UserYourSpaces() {
  const [memberships, setMemberships] = useState(getUserMemberships());
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetchMyBookings()
      .then(setBookings)
      .catch(() => setBookings([]));
  }, []);

  const onPayNow = (spaceId: string) => {
    setMemberships(payMembership(spaceId));
  };

  const onPauseResume = (spaceId: string, current: "active" | "paused") => {
    const nextStatus = current === "active" ? "paused" : "active";
    setMemberships(updateMembershipStatus(spaceId, nextStatus));
  };

  const onCancel = (spaceId: string) => {
    setMemberships(removeMembership(spaceId));
  };

  const onCancelBooking = async (bookingId: string) => {
    try {
      await cancelBooking(bookingId);
      const updated = await fetchMyBookings();
      setBookings(updated);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to cancel booking");
    }
  };

  const getSpaceLabel = (space: string | BookingSpaceRef) => {
    if (typeof space === "string") {
      return "Unknown space";
    }
    return space.name || "Unknown space";
  };

  return (
    <section className="surface-card section" style={{ width: "100%", margin: 0 }}>
      <h1 className="page-title">Your Spaces</h1>
      <p className="page-subtitle">Manage selected spaces, payments and memberships.</p>

      {memberships.length === 0 ? (
        <p>No memberships yet. Use Search Space and add one.</p>
      ) : (
        <div className="space-grid">
          {memberships.map((item) => (
            <article key={item.spaceId} className="surface-card space-card">
              <h3>{item.spaceName}</h3>
              <p style={{ margin: "0.2rem 0" }}>Plan: {formatMembershipPlan(item.plan)}</p>
              <p style={{ margin: "0.2rem 0" }}>Status: {item.status}</p>
              <p style={{ margin: "0.2rem 0" }}>Monthly Price: Rs {item.monthlyPrice}</p>
              <p style={{ margin: "0.2rem 0" }}>
                Next Billing: {new Date(item.nextBillingDate).toLocaleDateString()}
              </p>

              <div className="row">
                <button className="btn btn-primary" onClick={() => onPayNow(item.spaceId)}>
                  Pay Now
                </button>

                <button
                  className="btn btn-outline"
                  onClick={() => onPauseResume(item.spaceId, item.status)}
                >
                  {item.status === "active" ? "Pause Membership" : "Resume Membership"}
                </button>

                <button className="btn btn-danger" onClick={() => onCancel(item.spaceId)}>
                  Cancel
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <hr style={{ margin: "1.5rem 0" }} />

      <h2 style={{ marginTop: 0 }}>Seat Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet. Book from a space details page.</p>
      ) : (
        <div className="space-grid">
          {bookings.map((booking) => (
            <article key={booking._id} className="surface-card space-card">
              <h3>{getSpaceLabel(booking.spaceId)}</h3>
              <p style={{ margin: "0.2rem 0" }}>Seats: {booking.seatsBooked}</p>
              <p style={{ margin: "0.2rem 0" }}>
                Date: {new Date(booking.date).toLocaleDateString()}
              </p>
              <p style={{ margin: "0.2rem 0" }}>Status: {booking.status}</p>
              {booking.status === "confirmed" && (
                <button className="btn btn-danger" onClick={() => void onCancelBooking(booking._id)}>
                  Cancel Booking
                </button>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default UserYourSpaces;
