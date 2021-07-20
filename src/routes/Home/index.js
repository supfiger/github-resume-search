import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

function Header() {
  return (
    <>
      <Row className="border-bottom py-3">
        <h1>Home</h1>
      </Row>
      <Row className="border-bottom py-3">
        <h2 className="h5">Search for information about any github user</h2>
        <p className="m-0">
          This application can show you an information about any github user.{" "}
          <br />
          Just enter a username you want and click the "Search" button.
        </p>
      </Row>
    </>
  );
}

function Search() {
  const [username, setUsername] = useState("");
  let history = useHistory();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEnterClick = (e) => {
    if (e.key === "Enter") handleSearchClick();
  };

  const handleSearchClick = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      const json = await response.json();

      if (response.ok) {
        console.log("json:", json);
        history.push({
          pathname: `/${username}`,
          state: { userData: json },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row className="py-3">
      <Col className="py-2">
        <InputGroup>
          <Input
            placeholder="Enter a username"
            value={username}
            onChange={handleChangeUsername}
            onKeyDown={handleEnterClick}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary" onClick={handleSearchClick}>
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default function Home() {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
}
