export default function TableRow({ title, children }) {
  return (
    <tr>
      <th scope="row">{title}</th>
      <td>{children}</td>
    </tr>
  );
}
