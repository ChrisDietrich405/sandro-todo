import React, { useState } from "react";
import styles from "../styles.module.css";

const IncompleteTasks = () => {
  const [taskActive, setTaskActive] = useState(false);

  const handleTaskActive = () => {
    setTaskActive(!taskActive);
  };


  return (
    <div className={styles.incompleteTasks}>
      <h3>TO DO</h3>
      <div className={styles.tasksContainer}>
        <div className={styles.taskSingle} task_active={taskActive ? 'active' : ''} >
          <form className={styles.tasksForm}>
            <div className={styles.checkbox}>
              <input type="checkbox" name="check" />
            </div>
            <p>Lorem ipsum dolor sit.</p>
            <textarea name="tasks" onBlur={()=>{console.log("BLUR AGAIN")}} >Lorem ipsum dolor sit.</textarea>
            <div className={styles.actions}>
              <div className="pencil">
                <i className="bx bxs-pencil" onClick={handleTaskActive}></i>
              </div>
              <div className="trashCan">
                <i className="bx bxs-trash-alt"></i>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IncompleteTasks;
