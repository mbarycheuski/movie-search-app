import { ButtonGroup } from "react-bootstrap";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";
import UpdateWatchButton from "./UpdateWatchButton";
import { useFavoriteMovies } from "../../hooks";
import { MovieDetail, FavoriteMovie, Movie, MovieAction } from "../../types";
import { UPDATE_MOVIE_WATCH_STATUS_ACTION, ADD_MOVIE_ACTION, REMOVE_MOVIE_ACTION } from "../../constants";

const movieActions: MovieAction[] = [ADD_MOVIE_ACTION];
const favoriteMovieActions: MovieAction[] = [REMOVE_MOVIE_ACTION, UPDATE_MOVIE_WATCH_STATUS_ACTION];

const renderFavoriteMovieAction = (action: MovieAction, movie: FavoriteMovie) => {
    switch (action) {
        case UPDATE_MOVIE_WATCH_STATUS_ACTION:
            return <UpdateWatchButton key={action} movie={movie} />;
        case REMOVE_MOVIE_ACTION:
            return <RemoveButton key={action} movie={movie} />;
        default:
            throw Error(`Not supported action ${action}`);
    }
};

const renderMovieAction = (action: MovieAction, movie: MovieDetail | Movie) => {
    switch (action) {
        case ADD_MOVIE_ACTION:
            return <AddButton key={action} movie={movie} />;
        default:
            throw Error(`Not supported action ${action}`);
    }
};

type MovieActionsProps = {
    movie: MovieDetail | FavoriteMovie | Movie;
    allowedActions?: MovieAction[];
};

const MovieActions = ({ movie, allowedActions = [] }: MovieActionsProps) => {
    const { movies } = useFavoriteMovies();
    const favoriteMovie = movies.find(x => x.id === movie.id);

    const renderActions = () => {
        if (favoriteMovie) {
            return favoriteMovieActions
                .filter(x => allowedActions.includes(x))
                .map(x => renderFavoriteMovieAction(x, favoriteMovie));
        }

        return movieActions
            .filter(x => allowedActions.includes(x))
            .map(x => renderMovieAction(x, movie));
    };

    return (
        <ButtonGroup className="gap-2">{renderActions()}</ButtonGroup>
    );
};

export default MovieActions;