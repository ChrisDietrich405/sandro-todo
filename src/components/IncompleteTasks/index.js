import React, { useState } from "react";
import styles from "../styles.module.css";
import TaskSingle from "../TaskSingle";
import { useSelector, useDispatch } from "react-redux";

const IncompleteTasks = () => {
  
  const [taskActive, setTaskActive] = useState(false);

  const data = useSelector((state) => state);

  if(data.updatedIncompleted) {
    var incompletedTasks = data.updatedIncompleted;
  } else {
    var incompletedTasks = data.incompletedTasks
  }

  return (
    <div className={styles.incompleteTasks}>
      <h3>TO DO</h3>
      <div className={styles.tasksContainer}>
        {incompletedTasks.map((task) => {
          return <TaskSingle key={task.id} {...task} taskStatus="incompleted" />;
        })}
      </div>
    </div>
  );
};

export default IncompleteTasks;
