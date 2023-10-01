import { getCategories } from "../api";
import { NavLink, Link, Outlet } from "react-router-dom";

export default function Categories() {
  //the complicate here meaning that {isActive} Destructuring Objects https://www.w3schools.com/react/react_es6_destructuring.asp
  let arrowFunction = ( {isActive} ) => ({ color: isActive ? "red" : "blue" })
  const categories = getCategories();
  return (
    <div className="container">
      <h1>Session Categories</h1>
      <ul className="categories">
        {/* {categories.map(cat => <li key={cat.id}>{cat.name}</li>)} */}
        {/* remove key but nothing happen? ah no I see it in console instead */}
        {categories.map(cat =>
          <li key={cat.id}>
            {/* using navlink give us class="active" */}
            <NavLink style={arrowFunction} to={cat.id}>{cat.name}</NavLink>
          </li>)}
      </ul>
      <Outlet />
    </div>
  );
}
