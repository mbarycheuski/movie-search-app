import { Button } from "react-bootstrap";
import { FavoriteMovie } from "../../types";
import { useFavoriteMovies } from "../../hooks";

type UpdateWatchButtonProps = {
    movie: FavoriteMovie;
};

const UpdateWatchButton = ({ movie }: UpdateWatchButtonProps) => {
    const { updateFavoriteWatchStatus } = useFavoriteMovies();

    const handleUpdateWatchStatus = () => {
        updateFavoriteWatchStatus(movie.id, !movie.isWatched);
    };

    return (
        <Button variant="dark" onClick={handleUpdateWatchStatus}>
            {movie.isWatched ? "Unwatch" : "Watch"}
        </Button>
    );
};

export default UpdateWatchButton;