import React from "react";
import { Body } from "./Body";
import { Navbar } from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Body />
      </React.Fragment>
    );
  }
}

export default App;
