import { checkNumberFractionalPart, getNumberWholePart } from "../utils";

const BASE_ICON_CLASS = "bi";

const useRatingStarClass = (rating: number) => {
  return (starIndex: number): string => {
    const wholeRating = getNumberWholePart(rating);
    const hasFractionalPart = checkNumberFractionalPart(rating);

    if (starIndex < wholeRating) {
      return `${BASE_ICON_CLASS} bi-star-fill text-warning`;
    }

    if (starIndex === wholeRating && hasFractionalPart) {
      return `${BASE_ICON_CLASS} bi-star-half text-warning`;
    }

    return `${BASE_ICON_CLASS} bi-star text-muted`;
  };
};

export default useRatingStarClass;
