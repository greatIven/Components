import React from "react";
import Button from "./Button";
import "./Navbar.css";

const btnHomeColor = "primary";
const btnAboutColor = "secondary";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <span className="name">Lexy Escarlan</span>
        </li>
        <li className="right">
          <Button color={btnHomeColor}>Home</Button>
        </li>
        <li className="right">
          <Button color={btnAboutColor}>About</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
