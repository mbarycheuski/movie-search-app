import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FavoriteMovieFilterFormInput, FavoriteMovieStatus } from "../types";

const statuses = Object.values(FavoriteMovieStatus);

type FavoriteMovieFilterFormProps = {
    form: FavoriteMovieFilterFormInput;
    onSubmit: (data: FavoriteMovieFilterFormInput) => void;
    onReset: () => void;
};

const FavoriteMovieFilterForm = ({ form, onSubmit, onReset }: FavoriteMovieFilterFormProps) => {
    const {
        register,
        handleSubmit,
        setValue
    } = useForm<FavoriteMovieFilterFormInput>();

    useEffect(() => {
        setValue("movieTitle", form.movieTitle);
        setValue("status", form.status);
    }, [setValue, form.movieTitle, form.status]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
            <Row className="d-flex justify-content-center">
                <Form.Group as={Col} xs={8} md={7} className="my-1">
                    <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Search by movie title, e.g. Jurassic Park"
                        {...register("movieTitle")}
                    />
                </Form.Group>
                <Form.Group as={Col} xs={4} md={3} className="my-1">
                    <Form.Select
                        size="lg" className="me-2"
                        {...register("status")}>
                        {statuses.map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Col xs="auto" className="my-1">
                    <Button size="lg" type="submit" variant="dark">
                        Search
                    </Button>
                    <Button className="ms-1" size="lg" type="reset" variant="secondary" >
                        Reset
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default FavoriteMovieFilterForm;
