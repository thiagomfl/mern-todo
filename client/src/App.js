import React, { Component } from "react";
import AppNavbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import ItemModel from "./components/itemModal";

import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModel />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
