type Movie = {
  id: number;
  title: string;
  posterPath?: string;
  overview: string;
  releaseDate: string;
  rating: number;
  genreIds: number[];
};

export default Movie;
