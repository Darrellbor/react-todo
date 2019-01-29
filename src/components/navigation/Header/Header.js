import React from "react";
import styles from "./Header.css";
import { Link } from "react-router-dom";

const header = props => {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>Todo List</div>
      <div>
        <Link to="/" className={[styles.icon_todo, styles.icons].join(" ")}>
          <i className="fas fa-list-alt" />
        </Link>

        <Link
          to="/addTodo"
          className={[styles.icon_add, styles.icons].join(" ")}
        >
          <i className="fas fa-plus-circle" />
        </Link>
      </div>
    </div>
  );
};

export default header;
