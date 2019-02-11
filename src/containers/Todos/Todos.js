import React, { Component } from "react";
import styles from "./Todos.css";
import Todo from "../../components/Todo/Todo";

class Todos extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
  }

  doneTodoHandler = index => {
    let todos = [...this.state.todos];
    let updatedTodo = { ...todos[index] };
    updatedTodo.completed = !updatedTodo.completed;
    todos[index] = updatedTodo;
    this.setState({ todos: todos });

    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  removeTodoHandler = id => {
    let theTodos = localStorage.getItem("todos");
    theTodos = JSON.parse(theTodos);
    let newTodos = theTodos.filter(todo => {
      return todo.id !== id;
    });

    let todos = [...this.state.todos];
    const updatedTodos = todos.filter(todo => {
      return todo.id !== id;
    });

    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(newTodos));
    this.setState({ todos: updatedTodos });
  };

  render() {
    let emptyTodo = null;
    if (!this.state.todos || this.state.todos.length === 0) {
      emptyTodo = (
        <div style={{ textAlign: "center", padding: "20px" }}>
          No Todo to show!
        </div>
      );
    }
    return (
      <div className={styles.todo_wrapper}>
        <div className={styles.todos}>
          <div className={styles.todo_header}>My Todos</div>
          <div className={styles.todo_body}>
            {emptyTodo ||
              this.state.todos.map((todo, index) => (
                <Todo
                  key={todo.id}
                  details={todo.todo}
                  dueBy={todo.dueBy}
                  completed={todo.completed}
                  complete={() => this.doneTodoHandler(index)}
                  remove={() => this.removeTodoHandler(todo.id)}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
