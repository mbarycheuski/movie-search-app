import Movie from "./Movie";
import FavoriteMoviePersonalDetails from "./FavoriteMoviePersonalDetails"

type FavoriteMovie = Movie & {
  isWatched: boolean;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
  personalDetails: FavoriteMoviePersonalDetails;
};

export default FavoriteMovie;
