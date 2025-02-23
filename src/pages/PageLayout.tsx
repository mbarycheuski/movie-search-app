import { Outlet } from "react-router";
import { Header } from "../components";
import { Container } from "react-bootstrap";

const PageLayout = () => {
  return (
    <div>
      <Header />
      <Container className="mt-4">
        <Outlet />
      </Container>
    </div>
  );
};

export default PageLayout;
