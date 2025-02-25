import { Spinner } from "react-bootstrap";
import spinnerClasses from "./Spinner.module.css";

const SpinnerComponent = () => {
  return (
    <Spinner animation="grow" role="status" className={spinnerClasses.spinner}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default SpinnerComponent;
