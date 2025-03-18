import { Button } from "react-bootstrap";
import { FavoriteMovie } from "../../types";
import { useFavoriteMovies } from "../../hooks";

type UpdateWatchButtonProps = {
    movie: FavoriteMovie;
};

const UpdateWatchButton = ({ movie }: UpdateWatchButtonProps) => {
    const { updateFavoriteWatchStatus } = useFavoriteMovies();

    return (
        <Button
            variant="dark"
            onClick={() => updateFavoriteWatchStatus(movie.id, !movie.isWatched)} >
            {movie.isWatched ? "Unwatch" : "Watch"}
        </Button>
    );
};

export default UpdateWatchButton;