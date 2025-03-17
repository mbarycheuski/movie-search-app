import { useRatingStarClass, useArray } from "../hooks";
import { DEFAULT_STARS_COUNT } from "../constants";

type MovieRatingProps = {
  rating: number;
  starsCount?: number;
  interactive?: boolean;
  onChange?: (value: number) => void;
  className?: string;
};

const MovieRating = ({
  rating,
  onChange,
  starsCount = DEFAULT_STARS_COUNT,
  interactive = false,
  className = "",
}: MovieRatingProps) => {
  const { getStarClass } = useRatingStarClass(rating);
  const starsArray = useArray<number>(starsCount);

  const handleStarClick = (starIndex: number) => {
    if (interactive && onChange) {
      const newRating = starIndex + 1;
      onChange(newRating);
    }
  };

  const baseClassName = `${className} ${interactive ? "cursor-pointer" : ""}`

  return (
    <>
      {starsArray.map((_, index) => (
        <i
          key={index}
          className={`${baseClassName} ${getStarClass(index)}`}
          onClick={() => handleStarClick(index)}
        ></i>
      ))}
      <span className="ms-1">({rating})</span>
    </>
  );
};

export default MovieRating;
