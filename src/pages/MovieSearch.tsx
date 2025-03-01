import { useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SearchFormInput } from "../types";
import { useQueryParameters } from "../hooks";
import { useSearchMoviesQuery } from "../api/services";
import { ITEMS_PER_PAGE, DEFAULT_PAGE } from "../constants";
import { SearchForm, MovieCard, Pagination, Spinner, MovieSearchError } from "../components";

const MovieSearch = () => {
  const {
    queryParams: { search, page, year },
    isValid: isValidParameters,
    replaceQueryParams,
  } = useQueryParameters();

  const searchTitle = search ?? "";
  const currentPage = page ?? DEFAULT_PAGE;

  const { currentData, isError, isFetching, isUninitialized } = useSearchMoviesQuery(
    { movieTitle: searchTitle, page: currentPage, year },
    { skip: !searchTitle || !isValidParameters }
  );

  const movies = currentData?.results ?? [];
  const totalPages = currentData?.total_pages ?? DEFAULT_PAGE;
  const isNoMoviesFound = !isError && !isUninitialized && !isFetching && movies.length === 0;

  const handleSearch = (data: SearchFormInput) => {
    replaceQueryParams({ search: data.movieTitle.trim(), year: data.year });
  };

  const handlePageChange = useCallback(
    (page: number) => {
      replaceQueryParams({ search, page, year });
    },
    [replaceQueryParams, search, year]
  );

  if (!isValidParameters) {
    return <MovieSearchError className="mt-3" message="Invalid search parameters." />;
  }

  return (
    <>
      <SearchForm form={{ movieTitle: searchTitle, year }} onSubmit={handleSearch} />

      <Container className="mt-3">
        {isFetching && <Spinner />}

        {!isError && !isFetching && movies && (
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
                onPageChanged={handlePageChange}
              />
            </Container>
          </>
        )}

        {isNoMoviesFound && (
          <Container className="d-flex justify-content-center mt-3">
            <h5 className="text-dark">No movies found</h5>
          </Container>
        )}

        {isError && (
          <MovieSearchError
            className="mt-3"
            message="Something went wrong while fetching the movies. Please try again later."
          />
        )}
      </Container>
    </>
  );
};

export default MovieSearch;
