import { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useFavoriteMovies } from "../hooks";
import { sortMovies, filterMovie } from "../utils";
import { FavoriteMovieFilterFormInput, FavoriteMovieStatus, MovieAction } from "../types";
import { NoMoviesFound, MovieCard, FavoriteMovieFilterForm, MovieActions } from "../components";
import { ADD_MOVIE_ACTION, REMOVE_MOVIE_ACTION, UPDATE_MOVIE_WATCH_STATUS_ACTION } from "../constants";

const movieActions: MovieAction[] = [ADD_MOVIE_ACTION, UPDATE_MOVIE_WATCH_STATUS_ACTION, REMOVE_MOVIE_ACTION];

const defaultFilterForm: FavoriteMovieFilterFormInput = {
  movieTitle: "",
  status: FavoriteMovieStatus.AllMovies,
};

const FavoriteMovies = () => {
  const { movies } = useFavoriteMovies();
  const [filterForm, setFilterForm] = useState<FavoriteMovieFilterFormInput>(defaultFilterForm);

  const favorites = useMemo(() => {
    const filteredMovies = movies.filter(x => filterMovie(x, filterForm));
    return sortMovies(filteredMovies);
  }, [movies, filterForm]);

  const handleFilterSubmit = (form: FavoriteMovieFilterFormInput) => {
    setFilterForm(form);
  };

  const handleFilterReset = () => {
    setFilterForm(defaultFilterForm);
  };

  const renderContainer = () => {
    if (favorites.length === 0) return <NoMoviesFound className="d-flex justify-content-center" />;

    return (
      <Row>
        {favorites.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <MovieCard movie={movie} badge={movie.isWatched ? "Watched" : undefined}>
              <MovieActions movie={movie} allowedActions={movieActions} />
            </MovieCard>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <>
      <FavoriteMovieFilterForm form={filterForm} onSubmit={handleFilterSubmit} onReset={handleFilterReset} />
      <Container className="mt-3">{renderContainer()}</Container>
    </>
  );
};

export default FavoriteMovies;
