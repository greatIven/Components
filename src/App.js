import "./App.css";
// import Button from "./Button";
import Navbar from "./Navbar";
import Modal from "./Modal";
import Input from "./Input";

const name = "Iven Tristan";
const sur = "Coritico";
const age = 35;
const isSingle = true;
const arr = [1, 2, 3, 4, 5, 6];
const obj = {
  name: "Ven",
  age: 98,
};

// const btnHomeColor = "primary";
// const btnAboutColor = "secondary";

const url = "https:\\usccescebu.great-site.net";
function App() {
  //parent component
  return (
    <div className="App">
      {/* <h2>{name}</h2>
      <span>{age}</span>
      <span>{isSingle + ""}</span>
      <p>{arr}</p>
      <p>{obj.name + obj.age + ""}</p>
      <p>{55 + Math.random()}</p>
      <a href={url}>USCCES</a> */}
      <Input />
      <Navbar />
      <Modal message="Are you sure?" header="Warning" open={true} />
      <p>{name + " " + sur}</p>
      {/* //child component */}
      {/* <Button color={btnHomeColor}>Home</Button>
      <Button color={btnAboutColor}>About</Button> */}
    </div>
  );
}

export default App;
