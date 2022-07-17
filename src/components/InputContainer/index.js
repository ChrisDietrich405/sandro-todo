import React from "react";
import styles from "../styles.module.css";
import { useSelector, useDispatch } from "react-redux";

import { add_new_task } from "../../redux/actions";


const InputContainer = () => {

  const data = useSelector((state) => state);

  if(data.updatedIncompleted) {
    var incompletedTasks = data.updatedIncompleted;
  } else {
    var incompletedTasks = data.incompletedTasks
  }

  const dispatch = useDispatch()
  
  const handleNewTask = (e) =>{
      e.preventDefault()
      var new_task = e.target.newTask.value
      if(new_task.length != 0){
        incompletedTasks.push({"id": 8, "taskName": new_task})
        dispatch(add_new_task(incompletedTasks))
      }

      e.target.newTask.value = ''
  }

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={(e)=>{handleNewTask(e)}}>
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
