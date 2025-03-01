import { useRatingStarClass, useArray } from "../hooks";
import { DEFAULT_STARS_COUNT } from "../constants";

type MovieRatingProps = {
  starsCount?: number;
  rating: number;
};

const MovieRating = ({ rating, starsCount = DEFAULT_STARS_COUNT }: MovieRatingProps) => {
  const getStarClass = useRatingStarClass(rating);
  const starsArray = useArray<number>(starsCount);

  return (
    <span>
      {starsArray.map((_, index) => (
        <i key={index} className={getStarClass(index)}></i>
      ))}
      <span>({rating})</span>
    </span>
  );
};

export default MovieRating;
