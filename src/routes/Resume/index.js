import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";

import ResumeHeader from "./components/ResumeHeader";
import NotFoundHeader from "./components/NotFoundHeader";
import UserInfo from "./components/UserInfo";
import { fetchUserData } from "./utils";

export default function Resume() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [userId, setUserId] = useState(null);
  const history = useHistory();
  const username = history.location.pathname.slice(1);

  useEffect(() => {
    if (userData) setUserId(userData.id);
  }, [userData]);

  useEffect(() => {
    let controller = new AbortController();
    fetchUserData({ username, controller, setLoading }).then((data) =>
      setUserData(data)
    );

    return () => controller?.abort();
  }, [username]);

  if (userId) {
    return (
      <Container>
        <ResumeHeader userData={userData} />
        {loading ? <p>Loading...</p> : <UserInfo userData={userData} />}
      </Container>
    );
  } else {
    return (
      <Container>
        <NotFoundHeader username={username} />
      </Container>
    );
  }
}
