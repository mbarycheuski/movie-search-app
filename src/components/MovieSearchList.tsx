import { Container, Row, Col } from "react-bootstrap";
import { Movie, MovieAction } from "../types";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
import MovieActions from "./MovieActions";
import { ADD_MOVIE_ACTION, REMOVE_MOVIE_ACTION, ITEMS_PER_PAGE } from "../constants";

const movieActions: MovieAction[] = [ADD_MOVIE_ACTION, REMOVE_MOVIE_ACTION];

type MovieSearchListProps = {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  onPageChanged: (page: number) => void;
};

const MovieSearchList = ({
  movies = [],
  currentPage,
  totalPages,
  onPageChanged,
}: MovieSearchListProps) => {
  if (movies.length === 0) return null;

  return (
    <>
      <Container>
        <Row>
          {movies.map(movie => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <MovieCard movie={movie}>
                <MovieActions movie={movie} allowedActions={movieActions} />
              </MovieCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="d-flex justify-content-center mt-3">
        <Pagination
          currentPage={currentPage}
          itemsCount={totalPages}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChanged={onPageChanged}
        />
      </Container>
    </>
  );
};

export default MovieSearchList;
