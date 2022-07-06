import React from "react";
import Header from "../Header";
import InputContainer from "../InputContainer";
import styles from "../styles.module.css";
import IncompleteTasks from "../IncompleteTasks";

const TodoContainer = () => {
  return (
    <div className={styles.listContainer}>
      <Header />
      <InputContainer />
      <IncompleteTasks />
    </div>
  );
};

export default TodoContainer;
