type MovieDetail = {
    id: number;
    title: string;
    posterPath?: string;
    overview: string;
    releaseDate: string;
    rating: number;
    genres: {
        id: number;
        name: string;
    }[];
    voteAverage: number;
    popularity: number;
    voteCount: number;
    duration: number;
}

export default MovieDetail;