import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Table } from "reactstrap";

function Header() {
  return (
    <>
      <Row className="border-bottom py-3">
        <Link to="/">← Back to home</Link>
      </Row>
      <Row className="border-bottom py-3">
        <h1>{"John John"} — Resume</h1>
        <h2 className="h4">GitHub profile</h2>
      </Row>
    </>
  );
}

function UserInfo() {
  return (
    <Row>
      <Table>
        <tbody>
          <tr>
            <th scope="row">{}</th>
            <td>{}</td>
          </tr>
        </tbody>
      </Table>
    </Row>
  );
}

export default function Resume() {
  return (
    <Container>
      <Header />
      <UserInfo />
    </Container>
  );
}
