import React, { useState } from "react";
import styles from "../styles.module.css";
import { useSelector } from "react-redux";
import TaskSingle from "../TaskSingle";

const IncompleteTasks = () => {
  const [taskActive, setTaskActive] = useState(false);

  const data = useSelector((state) => state);
  var incompletedTasks = data.incompletedTasks

  const newArray = data.addData;

  if(newArray) {
    console.log("hello")
  } else {
    incompletedTasks = data.incompletedTasks
  }


  return (
    <div className={styles.incompleteTasks}>
      <h3>TO DO</h3>
      <div className={styles.tasksContainer}>
        {incompletedTasks.map((task) => {
          return <TaskSingle {...task} taskStatus="incompleted" />;
        })}
      </div>
    </div>
  );
};

export default IncompleteTasks;
