import { Table as BootstrapTable } from "reactstrap";

function Row({ title, children }) {
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>{children}</td>
    </tr>
  );
}

export default function Table({ data }) {
  const { userFullName, website, amountOfPublicRepos, dateProfileCreated } =
    data;

  const name = userFullName.split(" ")[0];
  const lastName = userFullName.split(" ")[1];
  const year = dateProfileCreated.toLocaleString();

  return (
    <BootstrapTable>
      <tbody>
        <Row title="Main info">
          <span>Name: </span>
          <strong>{name} </strong>
          <br />
          <span>Last name: </span>
          <strong>{lastName}</strong>
          <br />
          <span>Public repositories: </span>
          <strong>{amountOfPublicRepos}</strong>
          <br />
          <span>Year profile created: </span>
          <strong>{year}</strong>
        </Row>
        <Row title="Website">
          <a href={website}>{website}</a>
        </Row>
      </tbody>
    </BootstrapTable>
  );
}
