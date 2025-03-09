import { Container, Row, Col } from "react-bootstrap";
import { ITEMS_PER_PAGE } from "../constants";
import MovieSearchCard from "./MovieSearchCard";
import Pagination from "./Pagination";
import { useFavoriteMovies } from "../hooks";
import { Movie } from "../types";
import { convertToFavoriteMovie } from "../transforms";

type MovieSearchListProps = {
  movies: Movie[];
  currentPage: number;
  totalPages: number;
  onPageChanged: (page: number) => void;
};

const MovieSearchList = ({
  movies,
  currentPage,
  totalPages,
  onPageChanged,
}: MovieSearchListProps) => {
  const { addFavorite, removeFavorite, checkFavorite } = useFavoriteMovies();

  const handleMovieCardClick = (movie: Movie) => {
    if (checkFavorite(movie.id)) {
      removeFavorite(movie.id);
      return;
    }

    const favoriteMovie = convertToFavoriteMovie(movie);
    addFavorite(favoriteMovie);
  };

  const getButtonText = (movie: Movie) => checkFavorite(movie.id) ? "Remove from favorites" : "Add to favorites";

  if (movies.length === 0) return null;

  return (
    <>
      <Container>
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <MovieSearchCard
                buttonText={getButtonText(movie)}
                movie={movie}
                onClick={handleMovieCardClick}
              />
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
