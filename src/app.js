import React, { Component, Fragment } from "react";
import Usercomponent from "./Usercomponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Usercomponent />
      </Fragment>
    );
  }
}

export default App;
