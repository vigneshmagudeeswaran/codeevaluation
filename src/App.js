import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Saravana" heroName="Superman">
        <p>This is children</p>
      </Greet>
      <Greet name="Clark" heroName="Wonder Women">
        <button>Action</button>
      </Greet>
      <Greet name="Diana"></Greet>
      <Welcome />
      <Welcome name="Saravana" heroName="Superman" />
      <Welcome name="Clark" heroName="Wonder Women" />
      <Hello name="Diana" /> */}
      <Message />
    </div>
  );
}

export default App;
