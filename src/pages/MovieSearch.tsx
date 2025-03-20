import { useCallback } from "react";
import { Container } from "react-bootstrap";
import { SearchFormInput } from "../types";
import { DEFAULT_PAGE } from "../constants";
import { useQueryParameters } from "../hooks";
import { convertToMovie } from "../transforms";
import { useSearchMoviesQuery } from "../api/services";
import { SearchForm, Spinner, ErrorContainer, MovieSearchList, NoMoviesFound } from "../components";

const MovieSearch = () => {
  const {
    queryParams: { search, page, year },
    isValid: isValidParameters,
    replaceQueryParams,
  } = useQueryParameters();

  const searchTitle = search || "";
  const currentPage = page || DEFAULT_PAGE;

  const { currentData, isError, isFetching, isUninitialized } = useSearchMoviesQuery(
    { movieTitle: searchTitle, page: currentPage, year },
    { skip: !searchTitle || !isValidParameters }
  );

  const movies = currentData?.results.map(convertToMovie) ?? [];
  const totalPages = currentData?.total_pages ?? DEFAULT_PAGE;
  const isNoMoviesFound = !isError && !isUninitialized && !isFetching && movies.length === 0;

  const handleSearch = (searchFormInput: SearchFormInput) => {
    replaceQueryParams({ search: searchFormInput.movieTitle.trim(), year: searchFormInput.year });
  };

  const handlePageChange = useCallback(
    (page: number) => {
      replaceQueryParams({ search, page, year });
    },
    [replaceQueryParams, search, year]
  );

  const renderContainer = () => {
    if (isFetching) return <Spinner />;

    if (isError) {
      return (
        <ErrorContainer
          className="d-flex justify-content-center mt-3"
          message="Something went wrong while fetching the movies. Please try again later."
        />
      );
    }

    if (isNoMoviesFound) {
      return <NoMoviesFound className="d-flex justify-content-center mt-3" />;
    }

    return (
      <MovieSearchList
        movies={movies}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChanged={handlePageChange}
      />
    );
  };

  if (!isValidParameters) {
    return (
      <ErrorContainer
        className="d-flex justify-content-center mt-3"
        message="Invalid search parameters."
      />
    );
  }

  return (
    <>
      <SearchForm form={{ movieTitle: searchTitle, year }} onSubmit={handleSearch} />
      <Container className="mt-3">{renderContainer()}</Container>
    </>
  );
};

export default MovieSearch;
