import React from "react";
import styles from "./Header.css";

const header = props => {
  return (
    <div className={styles.Header}>
      <div className={styles.logo}>Todo List</div>
      <div>
        <a href="/" className={[styles.icon_todo, styles.icons].join(" ")}>
          <i className="fas fa-bars" />
        </a>

        <a href="/" className={[styles.icon_add, styles.icons].join(" ")}>
          <i className="fas fa-plus-circle" />
        </a>
      </div>
    </div>
  );
};

export default header;
