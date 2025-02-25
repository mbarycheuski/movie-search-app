import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieResponse } from "../models";
import { API_URL, API_IMAGE_URL, DEFAULT_PAGE } from "../../constants";

const API_KEY = import.meta.env.VITE_MOVIE_DB_API_TOKEN;

export const moviedbApi = createApi({
  reducerPath: "moviedbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${API_KEY}`);
      headers.set("accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchMovies: builder.query<
      MovieResponse,
      { movieTitle: string; page?: number; year?: number }
    >({
      query: ({ movieTitle, page = DEFAULT_PAGE, year }) => {
        let queryString = `search/movie?query=${movieTitle}&page=${page}`;
        if (year) {
          queryString += `&primary_release_year=${year}`;
        }
        return queryString;
      },
      transformResponse: (response: MovieResponse) => {
        return {
          ...response,
          results: response?.results.map((movie) => ({
            ...movie,
            poster_path: movie.poster_path ? `${API_IMAGE_URL}${movie.poster_path}` : undefined,
          })),
        };
      },
    }),
  }),
});

export const { useSearchMoviesQuery } = moviedbApi;
