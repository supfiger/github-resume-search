import Header from "../../components/Header";

export default function NotFoundHeader({ username }) {
  return (
    <Header back title="Not Found">
      <p>
        The user <strong>{username}</strong> is not found.
      </p>
    </Header>
  );
}
