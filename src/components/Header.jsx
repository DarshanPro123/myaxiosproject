import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <h1>
          <span>Cryprto</span> coins
        </h1>
        <main>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
        </main>
      </nav>
    </div>
  );
};

export default Header;
