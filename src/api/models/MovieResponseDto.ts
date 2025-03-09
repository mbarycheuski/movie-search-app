import MovieDto from "./MovieDto";

type MovieResponseDto = {
  page: number;
  results: MovieDto[];
  total_pages: number;
  total_results: number;
};

export default MovieResponseDto;
