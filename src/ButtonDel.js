import React, { Component } from "react";

function ButtonDel({ color }) {
  return <button className={color + " btnDel"}>Delete</button>;
}

export default ButtonDel;
