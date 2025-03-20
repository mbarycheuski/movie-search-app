import { Badge } from "react-bootstrap";
import MovieRating from "./MovieRating";
import { MovieDetail } from "../types";

type MovieDetailInfoProps = {
    movie: MovieDetail;
};

const MovieDetailInfo = ({ movie }: MovieDetailInfoProps) => (
    <>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>
            {movie.genres.map(genre => (
                <Badge key={genre.id} bg="primary" className="me-1">
                    {genre.name}
                </Badge>
            ))}
        </p>
        <p>
            <strong className="me-1">Rating:</strong>
            <MovieRating rating={movie.voteAverage} />
        </p>
        <p>
            <strong className="me-1">Popularity:</strong>
            <MovieRating rating={movie.popularity} />
        </p>
        <p><strong>Vote Count:</strong> {movie.voteCount}</p>
        <p><strong>Duration:</strong> {movie.duration} minutes</p>
        <p>
            <strong className="me-1">Release date:</strong>
            <Badge bg="secondary">{movie.releaseDate}</Badge>
        </p>
    </>
);

export default MovieDetailInfo;