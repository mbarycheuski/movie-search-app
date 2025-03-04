import { Container } from "react-bootstrap";

type NoMoviesFoundProps = React.ComponentProps<typeof Container>;

const NoMoviesFound = (props: NoMoviesFoundProps) => {
  return (
    <Container {...props}>
      <h5 className="text-dark">No movies found</h5>
    </Container>
  );
};

export default NoMoviesFound;
