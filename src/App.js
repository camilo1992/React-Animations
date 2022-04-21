import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      show: true,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleOpen() {
    this.setState({ show: true });
    console.log(4234234);
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal closed={this.handleClose.bind(this)} show={this.state.show} />
        <Backdrop show={this.state.show} />
        <button className="Button" onClick={this.handleOpen.bind(this)}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
