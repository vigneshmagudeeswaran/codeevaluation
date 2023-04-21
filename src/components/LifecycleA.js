import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "viswas",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  shouldComponentUpdata() {
    console.log("LifecycleA shouldComponentUpdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA get SnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "vikifier",
    });
  };
  render() {
    console.log("LifecycleA render method");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
