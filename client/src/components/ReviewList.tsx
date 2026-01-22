import type { Review } from "../types/space";
import StarRating from "./StarRating";
import ReviewBadge from "./ReviewBadge";

interface Props {
  reviews?: Review[];
}

function ReviewList({ reviews }: Props) {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div>
      <h3>Reviews</h3>

      {reviews.map((review, index) => (
        <div
          key={index}
          style={{
            padding: "0.5rem",
            borderBottom: "1px solid #ddd"
          }}
        >
          <StarRating rating={review.rating} />
          <ReviewBadge isFake={review.isFake} />

          <p>{review.comment}</p>

          {review.confidence && review.isFake && (
            <small>Confidence: {Math.round(review.confidence * 100)}%</small>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
