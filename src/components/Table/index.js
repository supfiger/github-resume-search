import { Table as BootstrapTable, Row, Col } from "reactstrap";

import TableRow from "./TableRow";
import { convertTableData } from "./utils";

export default function Table({ data }) {
  const {
    name,
    lastName,
    website,
    amountOfPublicRepos,
    date,
    languagesGrid,
    lastEditedRepos,
  } = convertTableData(data);

  return (
    <BootstrapTable>
      <tbody>
        <TableRow title="Main info">
          <span>Name: </span>
          <strong>{name} </strong>
          <br />
          <span>Last name: </span>
          <strong>{lastName}</strong>
          <br />
          <span>Public repositories: </span>
          <strong>{amountOfPublicRepos}</strong>
          <br />
          <span>Date profile created: </span>
          <strong>{date}</strong>
        </TableRow>
        <TableRow title="Website">
          <a href={website}>{website}</a>
        </TableRow>
        <TableRow title="Languages">
          {languagesGrid &&
            languagesGrid.arrayOfRows.map((item1, index1) => (
              <Row key={item1}>
                {languagesGrid.arrayOfColumns.map((item2, index2) => {
                  const language = languagesGrid.getCurrentLanguage(
                    index1,
                    index2
                  );
                  if (!language) return null;

                  const [name, percentage] = Object.entries(language)[0];

                  return (
                    <Col key={item2}>
                      <strong>{name}</strong> {`(${percentage}%)`}
                    </Col>
                  );
                })}
              </Row>
            ))}
        </TableRow>
        <TableRow title="Recently edited repositories">
          {lastEditedRepos &&
            lastEditedRepos.map((item) => (
              <Row key={item.name}>
                <a href={item.url}>{item.name}</a>
              </Row>
            ))}
        </TableRow>
      </tbody>
    </BootstrapTable>
  );
}
