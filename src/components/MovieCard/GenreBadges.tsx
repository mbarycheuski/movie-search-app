import { Badge } from 'react-bootstrap';
import { convertGenreIdsToNames } from '../../transforms';
import { useGetGenresQuery } from '../../api/services';

type GenreBadgesProps = {
    genreIds: number[];
};

const GenreBadges = ({ genreIds }: GenreBadgesProps) => {
    const { currentData: genres, isFetching } = useGetGenresQuery(undefined, {
        skip: genreIds.length === 0
    });

    if (isFetching || !genres) {
        return null;
    }

    const genreNames = convertGenreIdsToNames(genreIds, genres.genres);

    return (
        <>
            {genreNames.map(name => (
                <Badge key={name} bg="primary" className="me-1">
                    {name}
                </Badge>
            ))}
        </>
    );
};

export default GenreBadges;