import Movie from "./Movie";

type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export default MovieResponse;
