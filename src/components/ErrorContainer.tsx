import { Container, Alert } from "react-bootstrap";

type ErrorContainerProps = React.ComponentProps<typeof Container> & {
  message: string;
};

const ErrorContainer = ({ message, ...props }: ErrorContainerProps) => {
  return (
    <Container {...props}>
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    </Container>
  );
};

export default ErrorContainer;
