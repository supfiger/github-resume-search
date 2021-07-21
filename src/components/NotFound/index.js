import { Container, Row } from "reactstrap";

import BackHome from "../BackHome";

export default function NotFound({ username }) {
  return (
    <Container>
      <BackHome />
      <Row>
        <p>
          The user <strong>{username}</strong> is not found.
        </p>
      </Row>
    </Container>
  );
}
