import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";
import { createReview, fetchReviews, fetchSpaceById } from "../services/api";
import { isAuthenticated } from "../utils/auth";
import type { Review, Space } from "../types/space";

function SpaceDetails() {
  const { id } = useParams<{ id: string }>();
  const [space, setSpace] = useState<Space | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const gallery = space.photos && space.photos.length > 0 ? space.photos : [
    "https://picsum.photos/seed/default-1/1200/800",
    "https://picsum.photos/seed/default-2/1200/800",
    "https://picsum.photos/seed/default-3/1200/800",
    "https://picsum.photos/seed/default-4/1200/800"
  ];

  const rating = space.rating || 4.6;

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
            {space.city}, {space.state} {space.tier ? `• ${space.tier}` : ""}
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
          <button className="btn btn-primary" type="button">GET QUOTE</button>
          <button className="btn btn-outline" type="button">BOOK A TOUR</button>
        </aside>
      </div>
    </section>
  );
}

export default SpaceDetails;
