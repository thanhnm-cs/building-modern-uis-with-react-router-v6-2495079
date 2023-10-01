import {getCategories} from "../api";
import { Link, Outlet } from "react-router-dom";

export default function Categories() {
  const categories= getCategories();
  return (
    <div className="container">
      <h1>Session Categories</h1>
      <ul className="categories">
      {/* {categories.map(cat => <li key={cat.id}>{cat.name}</li>)} */}
      {/* remove key but nothing happen? ah no I see it in console instead */}
      {categories.map(cat => 
        <li key={cat.id}>
        <Link to={cat.id}>{cat.name}</Link>
        </li>)}
      </ul>
      <Outlet/>
    </div>
  );
}
