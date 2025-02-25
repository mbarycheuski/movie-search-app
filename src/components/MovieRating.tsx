import { checkNumberFractionalPart, getNumberWholePart } from "../utils";
import { DEFAULT_STARS_COUNT } from "../constants";

type MovieRatingProps = {
  starsCount?: number;
  rating: number;
};

const MovieRating = ({ rating, starsCount = DEFAULT_STARS_COUNT }: MovieRatingProps) => {
  const wholeRating = getNumberWholePart(rating);
  const hasFractionalPart = checkNumberFractionalPart(rating);

  return (
    <span>
      {[...Array(starsCount)].map((_, i) => (
        <i
          key={i}
          className={`bi ${
            i < wholeRating
              ? "bi-star-fill text-warning"
              : i === wholeRating && hasFractionalPart
              ? "bi-star-half text-warning"
              : "bi-star text-muted"
          }`}
        ></i>
      ))}
      <span>({rating})</span>
    </span>
  );
};

export default MovieRating;
