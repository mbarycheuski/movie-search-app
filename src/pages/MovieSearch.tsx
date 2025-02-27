import { useCallback } from "react";
import { useSearchParams } from "react-router";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { SearchFormInput } from "../types";
import { useSearchMoviesQuery } from "../api/services";
import { SearchForm, MovieCard, Pagination, Spinner } from "../components";
import { SEARCH_PARAM, PAGE_PARAM, YEAR_PARAM, ITEMS_PER_PAGE, DEFAULT_PAGE } from "../constants";

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get(SEARCH_PARAM) ?? "";
  const currentPage = Number(searchParams.get(PAGE_PARAM)) || DEFAULT_PAGE;
  const year = Number(searchParams.get(YEAR_PARAM)) || undefined;

  const { currentData, isError, isFetching, isUninitialized } = useSearchMoviesQuery(
    { movieTitle: search, page: currentPage, year },
    { skip: !search }
  );

  const movies = currentData?.results ?? [];
  const totalPages = currentData?.total_pages ?? DEFAULT_PAGE;
  const isNoMoviesFound = !isError && !isUninitialized && !isFetching && movies.length === 0;

  const handleSearch = (data: SearchFormInput) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(PAGE_PARAM);

    newParams.set(SEARCH_PARAM, data.movieTitle.trim());

    if (data.year) newParams.set("year", data.year.toString());
    else newParams.delete("year");

    setSearchParams(newParams, { replace: true });
  };

  const handlePageChange = useCallback(
    (page: number) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(PAGE_PARAM, page.toString());

      setSearchParams(newParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  return (
    <>
      <SearchForm form={{ movieTitle: search, year }} onSubmit={handleSearch} />

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
          <Container className="d-flex justify-content-center mt-3">
            <Alert variant="danger">
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>Something went wrong while fetching the movies. Please try again later.</p>
            </Alert>
          </Container>
        )}
      </Container>
    </>
  );
};

export default MovieSearch;
