import Header from "../../../components/Header";

export default function ResumeHeader({ userData }) {
  const { name } = userData;
  const title = name ? `${name}  — GitHub resume` : `GitHub resume`;

  return <Header back title={title}></Header>;
}
