import React from "react";
import styles from "../styles.module.css";

const TaskSingle = (props) => {
  const { id, taskName, taskStatus } = props;

  return (
    <div key={id} className={styles.taskSingle}>
      <form className={styles.tasksForm}>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            name="check"
            checked={taskStatus === "incompleted" ? false : true}
          />
        </div>

        {taskStatus === "incompleted" ? (
          <p>{taskName}</p>
        ) : (
          <p>
            <del>{taskName}</del>
          </p>
        )}

        {taskStatus === "incompleted" ? (
          <textarea
            name="tasks"
            onBlur={() => {
              console.log("BLUR AGAIN");
            }}
          ></textarea>
        ) : (
          ""
        )}

        <div className={styles.actions}>
          {taskStatus === "incompleted" ? (
            <div className="pencil">
              <i className="bx bxs-pencil"></i>
            </div>
          ) : (
            ""
          )}
          <div className="trashCan">
            <i className="bx bxs-trash-alt"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskSingle;
