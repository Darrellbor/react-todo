import React from "react";
import styles from "./Todo.css";

const todo = props => {
  return (
    <div className={styles.todo}>
      <div className={styles.todo_details}>
        <h4>{props.details}</h4>
        <b>Due By:</b> {props.dueBy}
      </div>
      <div className={styles.todo_ctrl}>
        <i className="fas fa-check-circle" />
      </div>

      <div className={[styles.todo_ctrl, styles.todo_ctrl_delete].join(" ")}>
        <i className="fas fa-times" />
      </div>
    </div>
  );
};

export default todo;
