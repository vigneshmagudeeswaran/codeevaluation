import React, { Component } from "react";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "viswas",
    };
    console.log("LifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdata() {
    console.log("LifecycleB shouldComponentUpdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB get SnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log(" LifecycleB render method");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleA;
