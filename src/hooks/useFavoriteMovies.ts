import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch, addMovie, removeMovie, watchMovie, updateMoviePersonalDetails } from "../store";
import { FavoriteMovie } from "../types";

const useFavoriteMovies = () => {
  const dispatch: AppDispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.favorites.movies);

  const addFavorite = (movie: FavoriteMovie) => {
    dispatch(addMovie(movie));
  };

  const removeFavorite = (id: number) => {
    dispatch(removeMovie(id));
  };

  const watchFavorite = (id: number) => {
    dispatch(watchMovie(id));
  };

  const updateFavoritePersonalDetails = (id: number, notes: string, rating: number) => {
    dispatch(updateMoviePersonalDetails({ id, details: { notes, rating } }));
  };

  const checkFavorite = (id: number) => movies.some(movie => movie.id === id);

  return { movies, watchFavorite, addFavorite, removeFavorite, checkFavorite, updateFavoritePersonalDetails };
};

export default useFavoriteMovies;
