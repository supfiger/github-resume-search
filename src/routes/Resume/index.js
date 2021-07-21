import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Row } from "reactstrap";

import { getRepos, getLanguages } from "./utils";
import Table from "../../components/Table";
import NotFound from "../../components/NotFound";

function Header() {
  const history = useHistory();
  const { name } = history.location.state.userData;

  return (
    <>
      <Row className="border-bottom py-3">
        <Link to="/">← Back to home</Link>
      </Row>
      <Row className="border-bottom py-3">
        <h1>{name ? `${name}  — Resume` : `Resume`}</h1>
        <h2 className="h4">GitHub profile</h2>
      </Row>
    </>
  );
}

function UserInfo() {
  const [repos, setRepos] = useState(null);
  const [languages, setLanguages] = useState(null);
  const history = useHistory();

  const { userData } = history.location.state;
  const { repos_url } = userData;

  const tableInfo = {
    userFullName: userData.name,
    amountOfPublicRepos: userData.public_repos,
    dateProfileCreated: userData.created_at,
    website: userData.blog,
    languages,
  };

  // set list of user repos
  useEffect(() => {
    let controller = new AbortController();
    getRepos({ repos_url, controller }).then((data) => setRepos(data));

    return () => controller?.abort();
  }, [repos_url]);

  // set list of user's used languages
  useEffect(() => {
    let controller = new AbortController();
    if (repos) {
      getLanguages({ repos, controller }).then((data) => setLanguages(data));
    }

    return () => controller?.abort();
  }, [repos]);

  useEffect(() => {
    console.log("userData:", userData);
    console.log("repos:", repos);
    console.log("languages:", languages);
  }, [repos, languages, userData]);

  return (
    <Row>
      <Table data={tableInfo} />
    </Row>
  );
}

export default function Resume() {
  const { state } = useHistory().location;
  const isUser = state && state.userData.id;
  const username = useHistory().location.pathname.slice(1);

  if (isUser) {
    return (
      <Container>
        <Header />
        <UserInfo />
      </Container>
    );
  } else {
    return <NotFound username={username} />;
  }
}
