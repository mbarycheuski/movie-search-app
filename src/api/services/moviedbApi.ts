import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieResponseDto, GenreResponseDto } from "../models";
import {
  API_URL,
  API_IMAGE_URL,
  API_GENRES_CACHE_EXPIRATION_IN_SECONDS,
  DEFAULT_PAGE,
} from "../../constants";

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
    searchMovies: builder.query<MovieResponseDto, { movieTitle: string; page?: number; year?: number }>(
      {
        query: ({ movieTitle, page = DEFAULT_PAGE, year }) => {
          const params = new URLSearchParams({
            query: movieTitle,
            page: page.toString(),
          });

          if (year) {
            params.set("primary_release_year", year.toString());
          }

          return `search/movie?${params}`;
        },
        transformResponse: (response: MovieResponseDto) => ({
          ...response,
          results: response?.results.map((movie) => ({
            ...movie,
            poster_path: movie.poster_path ? `${API_IMAGE_URL}${movie.poster_path}` : undefined,
          })),
        }),
      }
    ),
    getGenres: builder.query<GenreResponseDto, undefined>({
      query: () => "genre/movie/list",
      keepUnusedDataFor: API_GENRES_CACHE_EXPIRATION_IN_SECONDS,
    }),
  }),
});

export const { useSearchMoviesQuery, useGetGenresQuery } = moviedbApi;
