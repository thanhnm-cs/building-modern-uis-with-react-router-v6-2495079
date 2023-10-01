import logo from "../assets/red30-tech-logo.png";
import { Route, Routes, Link, nav } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Register from "./Register";
import Confirmation from "./Confirmation";


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} >
          <Route path=":catId" element={<Category/>} />
        </Route>

        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="register" element={<Register/>} />
        <Route path="confirmed" element={<Confirmation/>} />

      </Routes>
      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
