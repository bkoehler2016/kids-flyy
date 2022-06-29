import React from "react";
import Logo from "../../img/Kids Fly Logo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Navigation = () => {
  return (
    <Router>
      <div className="containter home">
        <nav className="mainNav">
          <img src={Logo} alt="logo" height={118} width={160} />
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login In</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navigation;
