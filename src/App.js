import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import Todos from "./containers/Todos/Todos";

class App extends Component {
  render() {
    return (
      <Layout>
        <Todos />
      </Layout>
    );
  }
}

export default App;
