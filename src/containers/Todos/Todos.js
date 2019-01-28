import React, { Component } from "react";
import styles from "./Todos.css";
import Todo from "../../components/Todo/Todo";

class Todos extends Component {
  render() {
    return (
      <div className={styles.todo_wrapper}>
        <div className={styles.todos}>
          <div className={styles.todo_header}>My Todos</div>
          <div className={styles.todo_body}>
            <Todo
              details="Get this todo app completed"
              dueBy="28th January 2019"
            />
            <Todo
              details="Get the react-native todo app completed"
              dueBy="231st January 2019"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
