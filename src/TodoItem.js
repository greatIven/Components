import React, { Component } from "react";
import "./TodoItem.css";
import ButtonDel from "./ButtonDel";
import "./ButtonDel.css";

const btnDelColor = "primary";
const todoListItem = [
  {
    id: 1,
    item: "Brush my Teeth",
    isComplete: true,
  },
  {
    id: 2,
    item: "Meditate & Exercise",
    isComplete: true,
  },
  {
    id: 3,
    item: "Make a to-do-list",
    isComplete: false,
  },
];

// creates a functions that returns an array of jsx elements
const renderList = () =>
  todoListItem.map(({ id, item, isComplete }) => (
    <div key={id} class="field">
      {/* <div>{items}</div> */}

      <div className="chk">
        <input type="checkbox" checked={isComplete} />
      </div>

      <div className={isComplete ? "todo-item-completed" : "item"}>{item}</div>
      <ButtonDel color={btnDelColor}></ButtonDel>
    </div>
  ));

function TodoItem() {
  return (
    <div className="app">
      <div>My Activities:</div>
      {renderList()}
    </div>
  );
}
const Activities = todoListItem.map(TodoItem);

export default TodoItem;
