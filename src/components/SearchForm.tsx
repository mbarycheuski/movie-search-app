import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";
import { SearchFormInput } from "../types";
import { MAX_YEAR, MIN_YEAR } from "../constants";

type SearchFormProps = {
  form: SearchFormInput;
  onSubmit: (data: SearchFormInput) => void;
};

const SearchForm = ({ form, onSubmit }: SearchFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = useForm<SearchFormInput>();

  useEffect(() => {
    setValue("movieTitle", form.movieTitle);
    setValue("year", form.year);
  }, [setValue, form.movieTitle, form.year]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="d-flex justify-content-center">
        <Form.Group as={Col} xs={8} md={8} className="my-1">
          <Form.Control
            type="text"
            size="lg"
            placeholder="Search by movie title, e.g. Jurassic Park"
            {...register("movieTitle", { required: "Movie title is required" })}
            isInvalid={errors.movieTitle && touchedFields.movieTitle}
          />
          <Form.Control.Feedback type="invalid">{errors.movieTitle?.message}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} xs={4} md={2} className="my-1">
          <Form.Control
            type="number"
            size="lg"
            placeholder="Movie year"
            {...register("year", {
              min: {
                value: MIN_YEAR,
                message: `Movie year must be greater than ${MIN_YEAR}`,
              },
              max: {
                value: MAX_YEAR,
                message: `Movie year must be less than ${MAX_YEAR}`,
              },
            })}
            isInvalid={errors.year && touchedFields.year}
          />
          <Form.Control.Feedback type="invalid">{errors.year?.message}</Form.Control.Feedback>
        </Form.Group>
        <Col xs="auto" className="my-1">
          <Button size="lg" type="submit" variant="dark">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
