import React from "react";
import styles from "../styles.module.css";
import { useSelector } from "react-redux";
import TaskSingle from "../TaskSingle";

const CompletedTasks = () => {
  const { completedTasks } = useSelector((state) => state);
  return (
    <div className={styles.completedTasks}>
      <h3>DONE</h3>
      <div className={styles.tasksContainer}>
        {completedTasks.map((task) => {
          return (
            <TaskSingle key={task.id} {...task} taskStatus = 'completed' />
          );
        })}
      </div>
    </div>
  );
};

export default CompletedTasks;
