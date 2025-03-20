import { MovieDto, GenreDto, MovieDetailDto } from "../api/models";
import { Movie, FavoriteMovie, MovieDetail } from "../types";

export const convertToMovie = (movieDto: MovieDto): Movie => ({
  id: movieDto.id,
  title: movieDto.title,
  overview: movieDto.overview,
  posterPath: movieDto.poster_path,
  releaseDate: movieDto.release_date,
  rating: movieDto.vote_average,
  genreIds: movieDto.genre_ids,
});

export const convertToFavoriteMovie = (movie: Movie | MovieDetail): FavoriteMovie => ({
  ...movie,
  genreIds: 'genreIds' in movie ? movie.genreIds : movie.genres.map(g => g.id),
  isWatched: false,
  createdAt: new Date().toISOString()
});

export const convertGenreIdsToNames = (genreIds: number[], genres: GenreDto[]) => {
  return genreIds.map((genreId) => {
    const genre = genres.find(g => g.id === genreId);
    return genre?.name || "Unknown";
  });
};

export const convertToMovieDetail = (movie: MovieDetailDto): MovieDetail => ({
  id: movie.id,
  title: movie.title,
  overview: movie.overview,
  posterPath: movie.poster_path,
  releaseDate: movie.release_date,
  rating: movie.vote_average,
  genres: movie.genres,
  popularity: movie.popularity,
  voteCount: movie.vote_count,
  duration: movie.runtime,
  voteAverage: movie.vote_average
});