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
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      {/* <h1 className='error'>Error</h1>
          <h1 className={styles.success}>Success</h1>
          <Inline/> */}
      {/* <NameList />
      <Stylesheet primary={true} />
      <Inline /> */}
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
