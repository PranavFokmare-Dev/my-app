import React from "react";
import { NavLink } from "react-router-dom";
const activeStyles = {
  color: "red",
  borderBottom: "1px solid black",
};
export default function Header() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? activeStyles : { color: "black", borderBottom: "0px" }
        }
        end
      >
        Home
      </NavLink>
      {"|"}
      <NavLink
        to="/About"
        style={({ isActive }) =>
          isActive ? activeStyles : { color: "black", borderBottom: "0px" }
        }
        end
      >
        AboutUs
      </NavLink>
    </nav>
  );
}
