import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" onClick={() => window.location.reload()}></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;