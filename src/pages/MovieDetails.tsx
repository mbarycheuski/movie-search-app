import { Container, Row, Col, Badge, Image } from "react-bootstrap";
import { useFavoriteMovies, useMovieIdParams } from "../hooks";
import { useGetMovieDetailsQuery } from "../api/services";
import { convertToMovieDetail } from "../transforms";
import { Spinner, ErrorContainer, MovieDatailInfo, MovieActions, MoviePersonalDetails } from "../components";

const MovieDetails = () => {
  const { movies } = useFavoriteMovies();
  const { movieId, isValid } = useMovieIdParams();

  const { currentData, isError, isFetching, error } = useGetMovieDetailsQuery(
    { movieId: movieId },
    { skip: !isValid }
  );

  const movieDetail = currentData ? convertToMovieDetail(currentData) : null;
  const favoriteMovie = isValid ? movies.find(movie => movie.id === movieId) : null;;

  const renderContainer = () => {
    if (!isValid) {
      return (
        <ErrorContainer
          className="d-flex justify-content-center mt-3"
          message="Invalid movie id. Please provide a valid movie id."
        />
      );
    }

    if (isFetching) return <Spinner />;

    if (isError || !movieDetail) {
      const errorMessage = error && 'status' in error && error.status === 404
        ? "Movie is not found."
        : "Something went wrong while fetching the movie detail. Please try again later.";

      return (
        <ErrorContainer
          className="d-flex justify-content-center mt-3"
          message={errorMessage}
        />
      );
    }

    return (
      <Row>
        <Col md={4} className="d-flex justify-content-center position-relative">
          <div className="position-relative">
            <Image
              src={movieDetail.posterPath || "/no_poster_image.svg"}
              alt={movieDetail.title} className="img-fluid" />
            {favoriteMovie?.isWatched && (
              <Badge bg="danger" className="position-absolute top-0 end-0 m-2">Watched</Badge>
            )}
          </div>
        </Col>
        <Col md={8} className="mt-3 mt-md-0">
          <Container>
            <Row>
              <MovieDatailInfo movie={movieDetail} />
            </Row>
            {favoriteMovie && (<Row className="my-3 border-dark border-top border-2 pt-2">
              <MoviePersonalDetails movie={favoriteMovie} />
            </Row>)}
            <Row className="my-3 border-dark border-top border-2 pt-2">
              <MovieActions movie={movieDetail} showWatchedButton />
            </Row>
          </Container>
        </Col>
      </Row>
    );
  };

  return (
    <Container className="mt-3">{renderContainer()}</Container>
  );
};

export default MovieDetails;
