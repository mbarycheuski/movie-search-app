import FavoriteMovieStatus from "./FavoriteMovieStatus";

export type FavoriteMovieFilterFormInput = {
    movieTitle?: string;
    status: FavoriteMovieStatus;
};

export default FavoriteMovieFilterFormInput;