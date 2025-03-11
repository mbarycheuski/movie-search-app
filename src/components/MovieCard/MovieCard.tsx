import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router";
import { trimText } from "../../utils";
import { Movie } from "../../types";
import MovieRating from "../MovieRating";
import GenreBadges from './GenreBadges';
import movieCardClasses from "./MovieCard.module.css";

type MovieCardProps = {
  movie: Movie;
  badge?: string;
  children?: React.ReactNode;
};

const MovieCard = ({ movie, badge, children }: MovieCardProps) => {
  const route = `/movies/${movie.id}`;

  return (
    <Card className="h-100">
      <Link className="position-relative" to={route}>
        <Card.Img
          variant="top"
          alt={movie.title}
          src={movie.posterPath || "/no_poster_image.svg"}
          className={movieCardClasses["img-hover-zoom"]}
        />
        {badge && (
          <Badge bg="danger" className="position-absolute top-0 end-0 m-2">
            {badge}
          </Badge>
        )}
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          <Link to={route} className="text-decoration-none text-dark">
            {movie.title}
          </Link>
        </Card.Title>
        <Card.Text className="flex-grow-1">{trimText(movie.overview)}</Card.Text>
        <Card.Text>
          <GenreBadges genreIds={movie.genreIds} />
        </Card.Text>
        <Card.Text>
          <Badge bg="secondary">{movie.releaseDate}</Badge>
        </Card.Text>
        <Card.Text>
          <MovieRating rating={movie.rating} />
        </Card.Text>
        {children}
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
