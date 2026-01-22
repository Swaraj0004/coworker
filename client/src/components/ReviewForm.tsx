import { useState } from "react";

interface Props {
  onSubmit: (review: { rating: number; comment: string }) => void;
}

function ReviewForm({ onSubmit }: Props) {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState<string>("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    onSubmit({ rating, comment });
    setComment("");
  };

  return (
    <form onSubmit={submit}>
      <h4>Add Review</h4>

      <label>
        Rating:
        <select
          value={rating}
          onChange={e => setRating(Number(e.target.value))}
        >
          {[5, 4, 3, 2, 1].map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </label>

      <br />

      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={e => setComment(e.target.value)}
        rows={3}
      />

      <br />

      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
