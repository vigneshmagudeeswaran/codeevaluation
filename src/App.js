import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
function App() {
  return (
    <div className="App">
      <NameList />
      <Stylesheet primary={true} />
      <Inline />
      {/* <ParentComponent /> */}
      {/* <UserGreeting/> */}
      {/* <Counter></Counter>
      <Greet name="Saravana" heroName="Superman"></Greet>
      <EventBind /> */}
      {/* <Greet name="Clark" heroName="Wonder Women">
        <button>Action</button>
      </Greet>
      <Greet name="Diana"></Greet> */}
      {/* <Welcome name="Saravana" heroName="Superman" />
      <FunctionClick />
      <ClassClick /> */}
      {/* <Welcome name="Clark" heroName="Wonder Women" />
      <Hello name="Diana" /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
