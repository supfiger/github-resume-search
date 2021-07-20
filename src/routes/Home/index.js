import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <h1>Home</h1>
      </Row>
      <hr />
      <Row>
        <h2 className="h4">Search for information about any github user</h2>
      </Row>
      <hr />
      <Row>
        <p>
          This application can show you an information about any github user.{" "}
          <br />
          Just enter a username you want and click the "Search" button.
        </p>
      </Row>
      <hr />
      <Row>
        <Col sm className="py-2">
          <InputGroup>
            <Input placeholder="Enter a username" />
            <InputGroupAddon addonType="append">
              <Button>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}
