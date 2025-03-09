import { Button } from "react-bootstrap";
import MovieCard from "./MovieCard/MovieCard";
import { Movie } from "../types";

type MovieSearchCardProps = {
  movie: Movie;
  buttonText: string;
  onClick: (movie: Movie) => void;
};

const MovieSearchCard = ({ movie, buttonText, onClick }: MovieSearchCardProps) => {
  return (
    <MovieCard movie={movie}>
      <Button variant="dark" className="mt-auto" onClick={() => onClick(movie)}>
        {buttonText}
      </Button>
    </MovieCard>
  );
};

export default MovieSearchCard;
