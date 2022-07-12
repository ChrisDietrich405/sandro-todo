import React from "react";
import Header from "../Header";
import InputContainer from "../InputContainer";
import styles from "../styles.module.css";
import IncompleteTasks from "../IncompleteTasks";
import CompletedTasks from "../CompletedTasks";

const TodoContainer = () => {
  return (
    <div className={styles.listContainer}>
      <Header />
      <InputContainer />
      <IncompleteTasks />
      <CompletedTasks />
    </div>
  );
};

export default TodoContainer;
