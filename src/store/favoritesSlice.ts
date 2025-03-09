import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteMovie } from "../types";

const FAVIRITE_MOVIES_SLICE_NAME = "favoriteMovies";

type FavoritesState = {
  movies: FavoriteMovie[];
}

const initialState: FavoritesState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: FAVIRITE_MOVIES_SLICE_NAME,
  initialState,
  reducers: {
    addMovie: (state, { payload }: PayloadAction<FavoriteMovie>) => {
      state.movies.push(payload);
    },
    removeMovie: (state, { payload }: PayloadAction<number>) => {
      state.movies = state.movies.filter(movie => movie.id !== payload);
    },
    watchMovie: (state, { payload }: PayloadAction<number>) => {
      const index = state.movies.findIndex(movie => movie.id === payload);

      if (index === -1) throw new Error(`Movie with id ${payload} not found`);

      state.movies[index].isWatched = true;
    }
  }
});

export const { addMovie, removeMovie, watchMovie } = favoritesSlice.actions;

export default favoritesSlice.reducer;
