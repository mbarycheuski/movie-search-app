import { UPDATE_MOVIE_WATCH_STATUS_ACTION, ADD_MOVIE_ACTION, REMOVE_MOVIE_ACTION } from "../constants";

type MovieAction = typeof UPDATE_MOVIE_WATCH_STATUS_ACTION | typeof REMOVE_MOVIE_ACTION | typeof ADD_MOVIE_ACTION;

export default MovieAction;