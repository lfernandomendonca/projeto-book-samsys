import { Col, Row } from "reactstrap";
import PostModal from "../modal/post-modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container">
      <Row>
        <Col><PostModal /></Col>
        <Col><h1>Book Samsys</h1></Col>
        </Row>
    </div>
  );
}
export default Header;
