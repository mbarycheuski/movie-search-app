import { NavLink } from "react-router";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { useFavoriteMovies } from "../hooks";

const Header = () => {
  const { movies } = useFavoriteMovies();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Movie Search
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/movies">
              My Movies
              <Badge bg="secondary" className="ms-1">
                {movies.length}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
