import React from "react";
import "./Button.css";

function Button({ color, children }) {
  return (
    <button className={color + " btn"}>
      <i class="fa fa-search"></i>
      {children}
    </button>
  );
}

export default Button;
