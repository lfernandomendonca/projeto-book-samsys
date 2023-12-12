import ReactModal from "../modal/react-modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="container">
      <h1>Book Samsys</h1>
      <ReactModal />
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <br />
    </div>
  );
}
export default Header;
