import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Greet name="Saravana" heroName="Superman">
    </Greet>
    
      {/* <Greet name="Clark" heroName="Wonder Women">
        <button>Action</button>
      </Greet>
      <Greet name="Diana"></Greet> */}
      <Welcome name="Saravana" heroName="Superman" />
      {/* <Welcome name="Clark" heroName="Wonder Women" />
      <Hello name="Diana" /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
