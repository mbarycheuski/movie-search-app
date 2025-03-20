import { Container } from "react-bootstrap";
import { useMovieIdParams } from "../hooks";
import { convertToMovieDetail } from "../transforms";
import { useGetMovieDetailsQuery } from "../api/services";
import { Spinner, ErrorContainer, MovieDetailsContent } from "../components";

const MovieDetails = () => {
  const { movieId, isValid } = useMovieIdParams();

  const { currentData, isError, isFetching, error } = useGetMovieDetailsQuery(
    { movieId },
    { skip: !isValid }
  );

  const movieDetail = currentData ? convertToMovieDetail(currentData) : null;

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

    return <MovieDetailsContent movie={movieDetail} />;
  };

  return <Container className="mt-3">{renderContainer()}</Container>;
};

export default MovieDetails;
