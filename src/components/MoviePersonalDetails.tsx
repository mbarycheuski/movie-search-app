import { useEffect } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { FavoriteMovie } from "../types";
import { useFavoriteMovies } from "../hooks";
import MovieRating from "./MovieRating";

type MoviePersonalDetailsProps = {
    movie: FavoriteMovie
};

type MoviePersonalDetailsForm = {
    rating: number;
    notes: string;
};

const MoviePersonalBlock = ({ movie }: MoviePersonalDetailsProps) => {
    const { updateFavoritePersonalDetails } = useFavoriteMovies();

    const defaultValues = {
        rating: movie.personalDetails?.rating || 0,
        notes: movie.personalDetails?.notes || "",
    }

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        control,
        formState: { isDirty },
    } = useForm<MoviePersonalDetailsForm>({
        defaultValues: defaultValues
    });

    useEffect(() => {
        setValue("notes", movie.personalDetails?.notes || "");
        setValue("rating", movie.personalDetails?.rating || 0);
    }, [movie?.personalDetails?.notes, movie?.personalDetails?.rating]);

    const onSubmit = (data: MoviePersonalDetailsForm) => {
        updateFavoritePersonalDetails(movie.id, data.notes, data.rating);
        reset(defaultValues);
    };

    const onReset = () => {
        reset(defaultValues);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>My Rating</Form.Label>


                    <Controller
                        control={control}
                        name="rating"
                        render={({ field: { onChange, value } }) => (
                            <span className="d-flex align-items-center">
                                <MovieRating
                                    rating={value}
                                    onChange={onChange}
                                    interactive={true}
                                    className="fs-4"
                                />
                            </span>
                        )}
                    />

                </Form.Group>
                <Form.Group>
                    <Form.Label>My Notes</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Write your notes here..."
                        className="mb-2"
                        style={{ maxHeight: "150px", minHeight: "75px" }}
                        {...register("notes")}
                    />
                </Form.Group>
                {movie.updatedAt && (
                    <small className="text-muted d-block text-end">
                        Last updated at: {new Date(movie.updatedAt).toLocaleString()}
                    </small>
                )}
                {isDirty && (
                    <ButtonGroup className="mt-2 d-flex justify-content-start">
                        <Button type="button" variant="warning" onClick={onReset}>
                            Reset
                        </Button>
                        <Button className="ms-1" type="submit" variant="dark">
                            Save
                        </Button>
                    </ButtonGroup>
                )}
            </Form>
        </div >
    );
};

export default MoviePersonalBlock;