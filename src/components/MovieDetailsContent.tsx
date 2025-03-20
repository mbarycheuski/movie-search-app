import { Row, Col, Badge, Image, Container } from "react-bootstrap";
import MovieDetailInfo from "./MovieDetailInfo";
import MovieActions from "./MovieActions";
import MoviePersonalDetails from "./MoviePersonalDetails";
import { useFavoriteMovies } from "../hooks";
import { MovieDetail, MovieAction } from "../types";
import { ADD_MOVIE_ACTION, REMOVE_MOVIE_ACTION, UPDATE_MOVIE_WATCH_STATUS_ACTION } from "../constants";

const movieActions: MovieAction[] = [ADD_MOVIE_ACTION, UPDATE_MOVIE_WATCH_STATUS_ACTION, REMOVE_MOVIE_ACTION];

type MovieDetailsContentProps = {
    movie: MovieDetail;
};

const MovieDetailsContent = ({ movie }: MovieDetailsContentProps) => {
    const { movies } = useFavoriteMovies();
    const favoriteMovie = movies.find(x => x.id === movie.id);

    return (
        <Row>
            <Col md={4} className="d-flex justify-content-center position-relative">
                <div className="position-relative">
                    <Image
                        className="img-fluid"
                        src={movie.posterPath || "/no_poster_image.svg"}
                        alt={movie.title}
                        style={!movie.posterPath ? { minWidth: "300px" } : undefined}
                    />
                    {favoriteMovie?.isWatched && (
                        <Badge bg="danger" className="position-absolute top-0 end-0 m-2">Watched</Badge>
                    )}
                </div>
            </Col>
            <Col md={8} className="mt-3 mt-md-0">
                <Container>
                    <Row>
                        <MovieDetailInfo movie={movie} />
                    </Row>
                    {favoriteMovie && (
                        <Row className="my-3 border-dark border-top border-2 pt-2">
                            <MoviePersonalDetails movie={favoriteMovie} />
                        </Row>
                    )}
                    <Row className="my-3 border-dark border-top border-2 pt-2">
                        <MovieActions movie={movie} allowedActions={movieActions} />
                    </Row>
                </Container>
            </Col>
        </Row>
    );
};

export default MovieDetailsContent;