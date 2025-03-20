import { useSearchParams } from "react-router";
import { setOrDeleteSearchParam } from "../utils";
import {
  SEARCH_PARAM,
  PAGE_PARAM,
  YEAR_PARAM,
  MIN_YEAR,
  MAX_YEAR,
  DEFAULT_PAGE,
  MAX_PAGE,
} from "../constants";

type QueryParameters = {
  search?: string;
  page?: number;
  year?: number;
};

const validatePage = (page: number) => page > 0 && page <= MAX_PAGE;

const validateYear = (year?: number) =>
  year === undefined || (year >= MIN_YEAR && year <= MAX_YEAR);

const useQueryParameters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get(SEARCH_PARAM) || undefined;
  const page = Number(searchParams.get(PAGE_PARAM)) || DEFAULT_PAGE;
  const year = searchParams.get(YEAR_PARAM)
    ? Number(searchParams.get(YEAR_PARAM))
    : undefined;

  const isValid = validatePage(page) && validateYear(year);

  const queryParams: QueryParameters = { search, page, year };

  const replaceQueryParams = (params: QueryParameters) => {
    const newParams = new URLSearchParams(searchParams);

    setOrDeleteSearchParam(newParams, SEARCH_PARAM, params.search);
    setOrDeleteSearchParam(newParams, PAGE_PARAM, params.page);
    setOrDeleteSearchParam(newParams, YEAR_PARAM, params.year);

    setSearchParams(newParams, { replace: true });
  };

  return { queryParams, replaceQueryParams, isValid };
};

export default useQueryParameters;
