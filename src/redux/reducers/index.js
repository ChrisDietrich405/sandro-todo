import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = {
  incompletedTasks: [
    {
      id: 1,
      taskName: "wash clothes",
    },
    {
      id: 2,
      taskName: "wash dishes",
    },
  ],
  completedTasks: [
    {
      id: 3,
      taskName: "make bed",
    },
    {
      id: 4,
      taskName: "wash car",
    },
  ],
};

const toDoReducers = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case "ADD_TASK":
      return { ...state, updatedIncompleted: actions.updatedArray };

    default:
      return state;
  }
};

const store = createStore(toDoReducers);

export default store;
