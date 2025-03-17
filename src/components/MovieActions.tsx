import { useRef } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { MovieDetail, FavoriteMovie, Movie } from "../types";
import { useFavoriteMovies } from "../hooks";
import { convertToFavoriteMovie } from "../transforms";
import ConfirmationModal, { ConfirmationModalRef } from "./ConfirmationModal";

type MovieActionsProps = {
    movie: MovieDetail | FavoriteMovie | Movie;
    showWatchedButton?: boolean;
};

const MovieActions = ({ movie, showWatchedButton }: MovieActionsProps) => {
    const { movies, watchFavorite, removeFavorite, addFavorite } = useFavoriteMovies();
    const favoriteMovie = movies.find(x => x.id === movie.id);
    const modalRef = useRef<ConfirmationModalRef>(null);

    const handleWatchFavorite = () => watchFavorite(movie.id);

    const handleRemoveFavorite = () => modalRef.current?.show(
        `Are you sure you want to remove "${movie.title}" from favorites?`
    );
    const handleConfirmRemoveFavorite = () => removeFavorite(movie.id);

    const handleAddFavorite = () => {
        const favorite = convertToFavoriteMovie(movie);
        addFavorite(favorite);
    };

    const renderFavoriteMovieActions = () => {
        if (favoriteMovie) {
            return (
                <>
                    <Button variant="dark" className="me-2" onClick={handleRemoveFavorite}>
                        Remove from favorites
                    </Button>
                    {showWatchedButton && (<Button
                        variant="dark"
                        disabled={favoriteMovie.isWatched}
                        onClick={handleWatchFavorite}
                    >
                        Watch
                    </Button>)}
                </>
            );
        }

        return (
            <Button variant="dark" onClick={handleAddFavorite}>
                Add to favorites
            </Button>
        );
    };

    return (
        <>
            <ButtonGroup>{renderFavoriteMovieActions()}</ButtonGroup>
            <ConfirmationModal
                ref={modalRef}
                title="Confirm Removal"
                onConfirm={handleConfirmRemoveFavorite}
                confirmText="Remove" />
        </>
    );
};

export default MovieActions;