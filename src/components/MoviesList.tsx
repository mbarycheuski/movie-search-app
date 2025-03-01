import { Container, Row, Col } from "react-bootstrap";
import { Movie } from "../api/models";
import { ITEMS_PER_PAGE } from "../constants";
import { MovieCard, Pagination } from "../components";

type MoviesListProps = {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  onPageChanged: (page: number) => void;
};

const MoviesList = ({ movies, currentPage, totalPages, onPageChanged }: MoviesListProps) => {
  if (movies.length === 0) return null;

  return (
    <>
      <Container>
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <MovieCard movie={movie} />
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

export default MoviesList;
