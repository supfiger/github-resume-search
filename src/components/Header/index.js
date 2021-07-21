import { Row } from "reactstrap";

import BackHome from "./BackHome";

export default function Header({ back, title, children }) {
  return (
    <div>
      {back && <BackHome />}
      <Row className="border-bottom py-3">
        <h1>{title}</h1>
      </Row>
      {children && <Row className=" py-3">{children}</Row>}
    </div>
  );
}
