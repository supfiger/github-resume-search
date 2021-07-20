import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Row } from "reactstrap";

import { getRepos, getLanguagesPercentage } from "../../utils";

import Table from "../../components/Table";

function Header() {
  const history = useHistory();
  const { name } = history.location.state.userData;

  return (
    <>
      <Row className="border-bottom py-3">
        <Link to="/">← Back to home</Link>
      </Row>
      <Row className="border-bottom py-3">
        <h1>{name} — Resume</h1>
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

  // get list of user repos
  useEffect(() => {
    // setRepos(getRepos(repos_url));
  }, [repos_url]);

  // get list of user's used languages
  useEffect(() => {
    // if (repos) setLanguages(getLanguagesPercentage(repos));
  }, [repos]);

  useEffect(() => {
    console.log("userData:", userData);
    console.log("repos:", repos);
    console.log("languages:", languages);
  }, [repos, languages, userData]);

  const tableInfo = {
    userFullName: userData.name,
    amountOfPublicRepos: userData.public_repos,
    dateProfileCreated: userData.created_at,
    website: userData.blog,
  };

  return (
    <Row>
      <Table data={tableInfo} />
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
