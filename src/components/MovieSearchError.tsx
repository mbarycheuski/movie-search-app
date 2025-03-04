import { Container, Alert } from "react-bootstrap";

type MovieSearchErrorProps = React.ComponentProps<typeof Container> & {
  message: string;
};

const MovieSearchError = ({ message, className, ...props }: MovieSearchErrorProps) => {
  return (
    <Container className={className} {...props}>
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </Container>
  );
};

export default MovieSearchError;
