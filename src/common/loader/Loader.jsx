import { Spinner } from "react-bootstrap";
import "./styles.css";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
};

export default Loader;
