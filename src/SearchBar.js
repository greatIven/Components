import Button from "./Button";
import "./SearchBar.css";
import Input from "./Input";
import TodoItem from "./TodoItem";

function searchBar() {
  return (
    <div className="searchBar">
      <Button />
      <Input />
      <TodoItem />
      {/* //child component */}
      {/* <Button color={btnHomeColor}>Home</Button>
      <Button color={btnAboutColor}>About</Button> */}
    </div>
  );
}

export default searchBar;
