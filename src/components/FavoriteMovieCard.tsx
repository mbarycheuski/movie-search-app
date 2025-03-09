import { Button, ButtonGroup } from "react-bootstrap";
import MovieCard from "./MovieCard/MovieCard";
import { FavoriteMovie } from "../types";

type FavoriteMovieCardProps = {
  movie: FavoriteMovie;
  onRemove: (id: number) => void;
  onWatch: (id: number) => void;
};

const FavoriteMovieCard = ({ movie, onRemove, onWatch }: FavoriteMovieCardProps) => {
  return (
    <MovieCard movie={movie} badge={movie.isWatched ? "Watched" : undefined}>
      <ButtonGroup>
        <Button variant="dark" className="me-2" onClick={() => onRemove(movie.id)}>
          Remove
        </Button>
        <Button variant="dark" disabled={movie.isWatched} onClick={() => onWatch(movie.id)}>
          Watch
        </Button>
      </ButtonGroup>
    </MovieCard>
  );
};
export default FavoriteMovieCard;
