import { useParams } from "react-router-dom";
import { useState } from "react";
import type { Review } from "../types/space";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

function SpaceDetails() {
  const { id } = useParams<{ id: string }>();

  // 🔴 TEMP MOCK (will be replaced by backend)
  const [reviews, setReviews] = useState<Review[]>([
    {
      rating: 5,
      comment: "Amazing workspace, very clean!",
      isFake: false
    },
    {
      rating: 5,
      comment: "BEST COWORKING EVER MUST VISIT!!!",
      isFake: true,
      confidence: 0.91
    }
  ]);

  const addReview = (review: { rating: number; comment: string }) => {
    // Fake-review flag will come from backend ML later
    setReviews(prev => [
      ...prev,
      { ...review, isFake: false }
    ]);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Space Details</h2>
      <p>Space ID: {id}</p>

      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={addReview} />
    </div>
  );
}

export default SpaceDetails;
