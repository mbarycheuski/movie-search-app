import { FavoriteMovie, FavoriteMovieStatus, FavoriteMovieFilterFormInput } from "../types";

export const sortMovies = (movies: FavoriteMovie[]) => {
    return [...movies].sort((a, b) => {
        if (a.isWatched === b.isWatched) {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }

        return Number(a.isWatched) - Number(b.isWatched);
    });
};

export const checkMatchStatus = (movie: FavoriteMovie, status: FavoriteMovieStatus) => {
    switch (status) {
        case FavoriteMovieStatus.WatchedOnly:
            return movie.isWatched;
        case FavoriteMovieStatus.UnwatchedOnly:
            return !movie.isWatched;
        case FavoriteMovieStatus.AllMovies:
            return true;
        default:
            throw new Error("Invalid movie status");
    }
};

export const filterMovie = (movie: FavoriteMovie, { movieTitle, status }: FavoriteMovieFilterFormInput) => {
    const matchesStatus = checkMatchStatus(movie, status);

    if (!movieTitle) {
        return matchesStatus;
    }

    const trimmedMovieTitle = movieTitle.trim().toLowerCase();
    const matchesSearch = movie.title.toLowerCase().includes(trimmedMovieTitle);

    return matchesSearch && matchesStatus;
};