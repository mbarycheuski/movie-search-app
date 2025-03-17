import { Container, Row, Col } from "react-bootstrap";
import { ITEMS_PER_PAGE } from "../constants";
import { Movie } from "../types";
import MovieCard from "./MovieCard/MovieCard";
import Pagination from "./Pagination";

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
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <MovieCard movie={movie} showWatchedButton={false} />
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
