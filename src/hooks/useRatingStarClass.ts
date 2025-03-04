import { checkNumberFractionalPart, getNumberWholePart } from "../utils";

const BASE_ICON_CLASS = "bi";

const useRatingStarClass = (rating: number) => {
  const wholeRating = getNumberWholePart(rating);
  const hasFractionalPart = checkNumberFractionalPart(rating);

  const getStarClass = (starIndex: number): string => {
    if (starIndex < wholeRating) {
      return `${BASE_ICON_CLASS} bi-star-fill text-warning`;
    }

    if (starIndex === wholeRating && hasFractionalPart) {
      return `${BASE_ICON_CLASS} bi-star-half text-warning`;
    }

    return `${BASE_ICON_CLASS} bi-star text-muted`;
  };

  return { getStarClass };
};

export default useRatingStarClass;
