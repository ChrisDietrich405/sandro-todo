import React from "react";
import styles from "../styles.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <strong>TODO</strong>LIST
      </h1>
      <img
        src="https://compassionate-clarke-69bf8c.netlify.app/assets/images/logo.svg"
        alt=""
      />
    </div>
  );
};

export default Header;
