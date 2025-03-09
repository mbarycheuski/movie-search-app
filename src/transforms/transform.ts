import { MovieDto, GenreDto } from "../api/models";
import { Movie, FavoriteMovie } from "../types";

export const convertToMovie = (movieDto: MovieDto): Movie => ({
  id: movieDto.id,
  title: movieDto.title,
  overview: movieDto.overview,
  posterPath: movieDto.poster_path,
  releaseDate: movieDto.release_date,
  rating: movieDto.vote_average,
  genreIds: movieDto.genre_ids,
});

export const convertToFavoriteMovie = (movie: Movie): FavoriteMovie => ({
  ...movie,
  isWatched: false,
  createdAt: new Date().toISOString(),
});

export const convertGenreIdsToNames = (genreIds: number[], genres: GenreDto[]) => {
  return genreIds.map((genreId) => {
    const genre = genres.find(g => g.id === genreId);
    return genre?.name || "Unknown";
  });
};
