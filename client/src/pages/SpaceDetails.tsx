import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
import { createReview, createSpaceLead, fetchReviews, fetchSpaceById } from "../services/api";
import { isAuthenticated } from "../utils/auth";
import { getFavorites, toggleFavorite } from "../utils/favorites";
import { addUserMembership, formatMembershipPlan, type MembershipPlan } from "../utils/memberships";
import type { Review, Space } from "../types/space";

function SpaceDetails() {
  const { id } = useParams<{ id: string }>();
  const [space, setSpace] = useState<Space | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan>("coworking-space");
  const [favoriteIds, setFavoriteIds] = useState<string[]>(getFavorites().map((item) => item._id));
  const [message, setMessage] = useState("");
  const [leadLoading, setLeadLoading] = useState<"quote" | "tour" | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const load = async () => {
      try {
        setLoading(true);
        setError("");
        const [spaceData, reviewData] = await Promise.all([fetchSpaceById(id), fetchReviews(id)]);
        setSpace(spaceData);
        setReviews(reviewData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load space details");
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [id]);

  const addReview = async (review: { rating: number; comment: string }) => {
    if (!id) {
      return;
    }

    try {
      const created = await createReview({
        spaceId: id,
        rating: review.rating,
        comment: review.comment
      });

      setReviews((prev) => [created, ...prev]);
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to submit review");
    }
  };

  const handleFavorite = () => {
    if (!space) {
      return;
    }

    const updated = toggleFavorite(space);
    setFavoriteIds(updated.map((item) => item._id));
    setMessage(
      updated.some((item) => item._id === space._id)
        ? `${space.name} added to favorites.`
        : `${space.name} removed from favorites.`
    );
  };

  const handleAddMembership = () => {
    if (!space) {
      return;
    }

    addUserMembership(space, selectedPlan);
    setMessage(`${space.name} added to Your Spaces with ${formatMembershipPlan(selectedPlan)} plan.`);
  };

  const handleLeadAction = async (action: "quote" | "tour") => {
    if (!space) {
      return;
    }

    if (!isAuthenticated()) {
      setMessage("Please login first to request a quote or book a tour.");
      return;
    }

    try {
      setLeadLoading(action);
      const response = await createSpaceLead({
        spaceId: space._id,
        action
      });
      setMessage(response.message);
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Action failed");
    } finally {
      setLeadLoading(null);
    }
  };

  if (loading) {
    return <section className="section surface-card">Loading space details...</section>;
  }

  if (error) {
    return <section className="section surface-card">{error}</section>;
  }

  if (!space) {
    return <section className="section surface-card">Space not found.</section>;
  }

  const pricing = space.pricing || {
    servicedOffice: (space.pricePerMonth || 0) + 12000,
    coworkingSpace: space.pricePerMonth,
    privateOffice: (space.pricePerMonth || 0) + 7000,
    virtualOffice: 2500
  };

  const highlights = space.amenityHighlights || [
    "WiFi",
    "Air Conditioning",
    "Parking",
    "Meeting Rooms",
    "Printing"
  ];

  const gallery =
    space.photos && space.photos.length > 0
      ? space.photos
      : [
          "https://picsum.photos/seed/default-1/1200/800",
          "https://picsum.photos/seed/default-2/1200/800",
          "https://picsum.photos/seed/default-3/1200/800",
          "https://picsum.photos/seed/default-4/1200/800"
        ];

  const rating = space.rating || 4.6;
  const isFavoriteSpace = favoriteIds.includes(space._id);

  return (
    <section className="space-details-shell">
      <div className="space-gallery">
        <img className="space-main-photo" src={gallery[0]} alt={space.name} />
        <div className="space-thumb-grid">
          {gallery.slice(1, 5).map((photo, idx) => (
            <img key={idx} src={photo} alt={`${space.name}-${idx + 2}`} />
          ))}
        </div>
      </div>

      <div className="space-content-grid">
        <div>
          <h1 className="page-title">Coworking Space: {space.name}</h1>
          <p className="page-subtitle">
            {space.city}, {space.state}
          </p>

          <h3>Coworking Space Amenities</h3>
          <div className="amenity-grid">
            {highlights.map((item) => (
              <span key={item} className="amenity-pill">
                {item}
              </span>
            ))}
          </div>

          <h3>Map</h3>
          <p>{space.address || `${space.city || ""}, ${space.state || ""}`}</p>
          <div className="detail-map-box">
            <iframe
              title="Space map"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${space.location.coordinates[1]},${space.location.coordinates[0]}&z=13&output=embed`}
            />
          </div>

          <h3>Overview</h3>
          <p>{space.overview || "A flexible workspace built for teams, founders, and freelancers."}</p>

          <h3>Pricing Plans</h3>
          <div className="pricing-grid">
            <article className="surface-card pricing-card">
              <h4>Coworking Space</h4>
              <p>{pricing.coworkingSpace}/month</p>
            </article>
            <article className="surface-card pricing-card">
              <h4>Private Office</h4>
              <p>{pricing.privateOffice}/month</p>
            </article>
            <article className="surface-card pricing-card">
              <h4>Virtual Office</h4>
              <p>{pricing.virtualOffice}/month</p>
            </article>
            <article className="surface-card pricing-card">
              <h4>Serviced Office</h4>
              <p>{pricing.servicedOffice}/month</p>
            </article>
          </div>

          <h3>Reviews</h3>
          <p>
            <strong>{rating.toFixed(1)}</strong> ({space.reviewCount || reviews.length} reviews)
          </p>
          <ReviewList reviews={reviews} />

          {isAuthenticated() ? <ReviewForm onSubmit={addReview} /> : <p>Please login to submit a review.</p>}
        </div>

        <aside className="surface-card detail-price-box">
          <h3>Serviced Office</h3>
          <p>from {pricing.servicedOffice}/month</p>
          <h3>Coworking Space</h3>
          <p>from {pricing.coworkingSpace}/month</p>
          <button className="btn btn-primary" type="button" onClick={() => void handleLeadAction("quote")} disabled={leadLoading !== null}>
            {leadLoading === "quote" ? "SENDING..." : "GET QUOTE"}
          </button>
          <button className="btn btn-outline" type="button" onClick={() => void handleLeadAction("tour")} disabled={leadLoading !== null}>
            {leadLoading === "tour" ? "BOOKING..." : "BOOK A TOUR"}
          </button>

          <div className="row" style={{ marginTop: "1rem", flexWrap: "wrap" }}>
            <button className="btn btn-outline" type="button" onClick={handleFavorite}>
              {isFavoriteSpace ? "Remove Favorite" : "Add Favorite"}
            </button>

            <select
              className="control-input"
              style={{ minWidth: "220px" }}
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value as MembershipPlan)}
            >
              <option value="coworking-space">Coworking Space</option>
              <option value="private-office">Private Office</option>
              <option value="virtual-office">Virtual Office</option>
              <option value="serviced-office">Serviced Office</option>
            </select>

            <button className="btn btn-primary" type="button" onClick={handleAddMembership}>
              Add To Your Spaces
            </button>
          </div>

          {message && <p style={{ color: message.includes("failed") || message.includes("Please login") ? "#b42318" : "#15803d", margin: "0.75rem 0 0" }}>{message}</p>}
        </aside>
      </div>
    </section>
  );
}

export default SpaceDetails;
