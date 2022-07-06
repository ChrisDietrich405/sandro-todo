import React from "react";
import styles from "../styles.module.css";

const InputContainer = () => {
  return (
    <div className={styles.inputContainer}>
      <form>
        <input
          type="text"
          name="newTask"
          placeholder="Add your new todo here..."
        />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default InputContainer;
