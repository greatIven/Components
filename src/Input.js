import React, { Component } from "react";
import "./Input.css";

export class Input extends Component {
  render() {
    return (
      <input
        type="text"
        className="searchBartext"
        placeholder="Search..."
      ></input>
    );
  }
}

export default Input;
