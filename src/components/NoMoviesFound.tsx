import { Container } from "react-bootstrap";

type NoMoviesFoundProps = React.ComponentProps<typeof Container>;

const NoMoviesFound = ({ className, ...props }: NoMoviesFoundProps) => {
  return (
    <Container className={className} {...props}>
      <h5 className="text-dark">No movies found</h5>
    </Container>
  );
};

export default NoMoviesFound;
