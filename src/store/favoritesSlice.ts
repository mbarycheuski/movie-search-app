import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteMovie, FavoriteMoviePersonalDetails } from "../types";

const FAVORITE_MOVIES_SLICE_NAME = "favoriteMovies";

type FavoritesState = {
  movies: FavoriteMovie[];
}

type UpdateMovieWatchStatusPayload = {
  id: number;
  isWatched: boolean;
}

type UpdateMoviePersonalDetailsPayload = {
  id: number;
  details: FavoriteMoviePersonalDetails;
}

const initialState: FavoritesState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: FAVORITE_MOVIES_SLICE_NAME,
  initialState,
  reducers: {
    addMovie: (state, { payload }: PayloadAction<FavoriteMovie>) => {
      state.movies.push(payload);
    },
    removeMovie: (state, { payload }: PayloadAction<number>) => {
      state.movies = state.movies.filter(movie => movie.id !== payload);
    },
    updateMovieWatchStatus: (state, { payload: { id, isWatched } }: PayloadAction<UpdateMovieWatchStatusPayload>) => {
      const index = state.movies.findIndex(movie => movie.id === id);

      if (index === -1)
        throw new Error(`Movie with id ${id} not found`);

      state.movies[index].isWatched = isWatched;
    },
    updateMoviePersonalDetails: (state, { payload: { id, details } }: PayloadAction<UpdateMoviePersonalDetailsPayload>) => {
      const index = state.movies.findIndex(movie => movie.id === id);

      if (index === -1)
        throw new Error(`Movie with id ${id} not found`);

      const movie = state.movies[index];
      movie.updatedAt = new Date().toISOString();
      movie.personalDetails = { ...movie.personalDetails, ...details };
    }
  }
});

export const { addMovie, removeMovie, updateMovieWatchStatus, updateMoviePersonalDetails } = favoritesSlice.actions;

export default favoritesSlice.reducer;
