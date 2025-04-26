import { ToastContainer } from "react-toastify";
import Task from "./Task";

import "./TaskPanel.css";

import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

import { useState, useEffect } from "react";

let TaskPanel = function () {
  //let herokuURL = "http://localhost:81";
  let herokuURL = 'https://tasktracker-api-75312bd20c21.herokuapp.com';

  let userid = 1;
  let noTasks = [
    {
      id: 0,
      title: "No Tasks Yet!!!",
      description: "Make a new task => ",
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(noTasks);

  useEffect(() => {
    fetchTasks();
  }, []);

  let fetchTasks = function () {
    fetch(herokuURL + `/api/tasks/${userid}`)
      .then((res) => {
        if (res != undefined) return res.json();
      })
      .then((json) => {
        setTasks(json);
        return json;
      })
      .catch((err) => {
        console.error("Error fetching:", err);
        setTasks(noTasks);
        return noTasks;
      });
  };

  let deleteTask = function (id) {
    fetch(herokuURL + `/api/tasks/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
    }).then(() => {
      toast("Tasks Deleted!!!", { type: "info" });
      fetchTasks();
    });
  };

  let completeTask = function (id, completed) {
    let task = { completed: completed };
    console.log(task);
    fetch(herokuURL + `/api/tasks/${id}`, {
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
      method: "PUT",
    }).then(() => {
      if (completed) toast("Tasks Complete!!!", { type: "success" });
      else toast("Tasks Reset!!!", { type: "info" });
      fetchTasks();
    });
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      <ul className="list-group taskpanel-list">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="list-group-item taskpanel-item col-12 col-xxl-6"
            >
              <Task
                {...task}
                onDelete={(id) => deleteTask(id)}
                onDone={(id, completed) => completeTask(id, completed)}
              ></Task>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskPanel;
