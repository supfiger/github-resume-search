import React, { useState, useEffect } from "react";
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

import HomeHeader from "./HomeHeader";
import { searchUser } from "./utils";

function Search() {
  const [username, setUsername] = useState("");
  const [searching, setSearching] = useState(false);
  let history = useHistory();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEnterClick = (e) => {
    if (e.key === "Enter") handleSearchClick();
  };

  const handleSearchClick = () => {
    setSearching(true);
  };

  useEffect(() => {
    let controller = new AbortController();
    if (searching) searchUser({ controller, username, history });

    return () => controller?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searching]);

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
      <HomeHeader />
      <Search />
    </Container>
  );
}
