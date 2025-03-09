import Movie from "./Movie";

type FavoriteMovie = Movie & {
  isWatched: boolean;
  notes?: string;
  createdAt: string;
};

export default FavoriteMovie;
