import { Card, Button, Badge } from "react-bootstrap";
import MovieRating from "./MovieRating";
import { Movie } from "../api/models";
import { trimText } from "../utils";

type MovieCardProps = {
  movie: Movie;
};

//TODO: add ganre and director
const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" alt={movie.title} src={movie.poster_path ?? "/no_poster_image.svg"} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text className="flex-grow-1">{trimText(movie.overview)}</Card.Text>
        <Card.Text>
          <Badge bg="secondary">{movie.release_date}</Badge>
        </Card.Text>
        <Card.Text>
          <MovieRating rating={movie.vote_average} />
        </Card.Text>
        <Button variant="dark" className="mt-auto">
          Add to collection
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
