import { useParams } from "react-router";

const useMovieIdParams = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const id = Number(movieId);
    const isValid = !isNaN(id) && id > 0;

    return { movieId: id, isValid };
};

export default useMovieIdParams;