import { useParams } from "react-router-dom";

export default function Category() {
  const {catID} = console.log(useParams());
  return (
    <>
      <h2>Category Sessions</h2>
      <p>Category session content displays here...</p>
    </>
  );
}
