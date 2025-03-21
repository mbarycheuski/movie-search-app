import { useRef } from "react";
import { Button } from "react-bootstrap";
import { FavoriteMovie } from "../../types";
import { useFavoriteMovies } from "../../hooks";
import ConfirmationModal, { ConfirmationModalRef } from "../ConfirmationModal";

type RemoveButtonProps = {
    movie: FavoriteMovie;
};

const RemoveButton = ({ movie }: RemoveButtonProps) => {
    const { removeFavorite } = useFavoriteMovies();
    const modalRef = useRef<ConfirmationModalRef>(null);

    const handleRemoveFavorite = () => {
        modalRef.current?.show(`Are you sure you want to remove "${movie.title}" from favorites?`);
    };

    const handleConfirmRemoveFavorite = () => {
        removeFavorite(movie.id);
    };

    return (
        <>
            <Button variant="dark" onClick={handleRemoveFavorite}>
                Remove
            </Button>
            <ConfirmationModal
                ref={modalRef}
                title="Confirm Removal"
                onConfirm={handleConfirmRemoveFavorite}
                confirmText="Remove"
            />
        </>
    );
};

export default RemoveButton;