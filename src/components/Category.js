import { useParams } from "react-router-dom";
import { getCategory } from "../api";

export default function Category() {
  const { catId } = useParams();
  const category = getCategory(catId);
  return (
    <>
      <h2>{category?.name} session</h2>
      <ul className="session-list">
        {category?.sessions.map(session => (
          <li key={session.id} className="session">
            <p className="session-name"> {session.name}</p>
            <p>{session.speaker.name} | {session.speaker.org}</p>
          </li>))}
      </ul>
    </>
  );
}
