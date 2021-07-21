import { useState, useEffect } from "react";
import { Row } from "reactstrap";

import TableComponent from "./dumb/TableComponent";
import { getRepos, getLanguages } from "./utils";

export default function UserInfo({ userData }) {
  const [repos, setRepos] = useState(null);
  const [languages, setLanguages] = useState(null);
  const { repos_url } = userData;
  const tableInfo = {
    userFullName: userData.name,
    amountOfPublicRepos: userData.public_repos,
    dateProfileCreated: userData.created_at,
    website: userData.blog,
    languages,
    repos,
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

  return (
    <Row>
      <TableComponent data={tableInfo} />
    </Row>
  );
}
