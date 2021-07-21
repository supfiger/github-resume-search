import { Row } from "reactstrap";
import { Link } from "react-router-dom";

export default function BackHome() {
  return (
    <Row className="border-bottom py-3">
      <Link to="/">← Back to home</Link>
    </Row>
  );
}
