import { Container, Row, Col } from "react-bootstrap";
import { useFavoriteMovies } from "../hooks";
import { FavoriteMovie } from "../types";
import { NoMoviesFound, FavoriteMovieCard } from "../components";
import { useCallback, useMemo } from "react";

const sortMovies = (movies: FavoriteMovie[]) => {
  return [...movies].sort((a, b) => {
    if (a.isWatched === b.isWatched) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }

    return Number(a.isWatched) - Number(b.isWatched);
  });
};

const FavoriteMovieList = () => {
  const { movies, watchFavorite, removeFavorite } = useFavoriteMovies();
  const favorites = useMemo(() => sortMovies(movies), [movies]);

  const handleWatchClick = useCallback((id: number) => {
    watchFavorite(id);
  }, [watchFavorite]);

  const handleRemoveClick = useCallback((id: number) => {
    removeFavorite(id);
  }, [removeFavorite]);

  if (favorites.length === 0) return <NoMoviesFound className="d-flex justify-content-center mt-5" />;

  return (
    <Container>
      <Row>
        {favorites.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <FavoriteMovieCard
              movie={movie}
              onRemove={handleRemoveClick}
              onWatch={handleWatchClick}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavoriteMovieList;
