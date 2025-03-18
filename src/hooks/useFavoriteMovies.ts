import { useSelector, useDispatch } from "react-redux";
import { FavoriteMovie } from "../types";
import { RootState, AppDispatch, addMovie, removeMovie, updateMovieWatchStatus, updateMoviePersonalDetails } from "../store";

const useFavoriteMovies = () => {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.favorites.movies);

  const addFavorite = (movie: FavoriteMovie) => {
    dispatch(addMovie(movie));
  };

  const removeFavorite = (id: number) => {
    dispatch(removeMovie(id));
  };

  const updateFavoriteWatchStatus = (id: number, isWatched: boolean) => {
    dispatch(updateMovieWatchStatus({ id, isWatched }));
  };

  const updateFavoritePersonalDetails = (id: number, notes: string, rating: number) => {
    dispatch(updateMoviePersonalDetails({ id, details: { notes, rating } }));
  };

  const checkFavorite = (id: number) => movies.some(movie => movie.id === id);

  return { movies, updateFavoriteWatchStatus, addFavorite, removeFavorite, checkFavorite, updateFavoritePersonalDetails };
};

export default useFavoriteMovies;
