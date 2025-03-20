// API URLs
export const API_URL = "https://api.themoviedb.org/3";
export const API_IMAGE_URL = "https://image.tmdb.org/t/p/original/";
export const API_GENRES_CACHE_EXPIRATION_IN_SECONDS = 3600; // Cache expiration set to 1 hour

// searh parameters
export const SEARCH_PARAM = "search";
export const PAGE_PARAM = "page";
export const YEAR_PARAM = "year";

// validations
export const MIN_YEAR = 1900;
export const MAX_YEAR = 2050;
export const ITEMS_PER_PAGE = 20;
export const DEFAULT_PAGE = 1;
export const MAX_PAGE = 100;
export const DEFAULT_STARS_COUNT = 10;

// movie actions
export const UPDATE_MOVIE_WATCH_STATUS_ACTION = "update-watch-status";
export const ADD_MOVIE_ACTION = "add";
export const REMOVE_MOVIE_ACTION = "remove";
