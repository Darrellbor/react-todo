import React from "react";
import styles from "./Todo.css";

const todo = props => {
  const todo_ctrl = [styles.todo_ctrl];
  const todo_details = [styles.todo_details];
  if (props.completed) {
    todo_ctrl.push(styles.todo_ctrl_success);
    todo_details.push(styles.line_through);
  }
  return (
    <div className={styles.todo}>
      <div className={todo_details.join(" ")}>
        <h4>{props.details}</h4>
        <b>Due By:</b> {props.dueBy}
      </div>
      <div className={todo_ctrl.join(" ")}>
        <i onClick={props.complete} className="fas fa-check-circle" />
      </div>

      <div className={[styles.todo_ctrl, styles.todo_ctrl_delete].join(" ")}>
        <i onClick={props.remove} className="fas fa-times" />
      </div>
    </div>
  );
};

export default todo;
