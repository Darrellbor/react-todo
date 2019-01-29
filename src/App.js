import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import AddTodo from "./containers/AddTodo/AddTodo";
import Todos from "./containers/Todos/Todos";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/addTodo" component={AddTodo} />
            <Route path="/" exact component={Todos} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
