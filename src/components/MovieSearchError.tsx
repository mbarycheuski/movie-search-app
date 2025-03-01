import { Container, Alert } from "react-bootstrap";

type MovieSearchErrorProps = {
  message: string;
  className?: string;
};

const MovieSearchError = ({ message, className }: MovieSearchErrorProps) => {
  return (
    <Container className={`d-flex justify-content-center ${className}`}>
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </Container>
  );
};

export default MovieSearchError;
