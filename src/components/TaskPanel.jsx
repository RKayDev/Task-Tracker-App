import Task from "./Task";

import "./TaskPanel.css";

let TaskPanel = function ({ tasks }) {
  return (
    <ul className="list-group taskpanel-list">
      {tasks.map((task) => {
        return (
          <>
            <li class="list-group-item taskpanel-item col-12 col-xxl-6">
              <Task {...task}></Task>
            </li>
            <br />
          </>
        );
      })}
    </ul>
  );
};

export default TaskPanel;
