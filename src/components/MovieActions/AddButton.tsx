import { Button } from "react-bootstrap";
import { MovieDetail, Movie } from "../../types";
import { useFavoriteMovies } from "../../hooks";
import { convertToFavoriteMovie } from "../../transforms";

type AddButtonProps = {
    movie: MovieDetail | Movie;
};

const AddButton = ({ movie }: AddButtonProps) => {
    const { addFavorite } = useFavoriteMovies();

    const handleAddFavorite = () => {
        const favorite = convertToFavoriteMovie(movie);
        addFavorite(favorite);
    };

    return (
        <Button variant="dark" onClick={handleAddFavorite}>
            Add to favorites
        </Button>
    );
};

export default AddButton;