import Header from "../../components/Header";

export default function HomeHeader() {
  return (
    <Header title="Home">
      <h2 className="h5">Search for information about any github user</h2>
      <p className="m-0">
        This application can show you an information about any github user.{" "}
        <br />
        Just enter a username you want and click the "Search" button.
      </p>
    </Header>
  );
}
