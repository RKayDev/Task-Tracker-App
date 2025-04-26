import { ToastContainer } from "react-toastify";
import Task from "./Task";
import TaskEditor from "./TaskEditor";

import "./TaskPanel.css";

import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";

import { toast } from "react-toastify";

import { useState, useEffect } from "react";

let TaskPanel = function () {
  let herokuURL = "http://192.168.0.106:81";
  herokuURL = 'https://tasktracker-api-75312bd20c21.herokuapp.com';

  let userid = 1;
  let noTasks = [
    {
      id: 0,
      title: "No Tasks Yet!!!",
      description: "Make a new task => ",
      completed: false,
    },
  ];
  function showFreshToast(message, type) {
    toast.dismiss();
    toast(message, {
      transition: Zoom,
      transitionDuration: 100,
      autoClose: 1000,
      position: "top-right",
      type: type,
      closeOnClick: true,
      theme: "dark",
      closeButton: false,
    });
  }

  const types = {
    0: "info",
    1: "success",
    2: "warning",
    3: "error",
  };

  const [tasks, setTasks] = useState(noTasks);
  const [showEditor, setShowEditor] = useState(false);

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
      showFreshToast("Tasks Deleted!!!", types[2]);
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
      if (completed) showFreshToast("Tasks Complete!!!", types[1]);
      else showFreshToast("Tasks Reset!!!", types[0]);
      fetchTasks();
    });
  };

  let onAdd = function () {
    showFreshToast("Task Added!!!", types[1]);
    setShowEditor(false);
    fetchTasks();
  };
  return (
    <>
      <ToastContainer></ToastContainer>

      {showEditor && (
        <div className="row">
          <div className="col-12 col-xxl-6 mx-auto">
            <TaskEditor onAdd={onAdd}></TaskEditor>
          </div>
        </div>
      )}
      <br />
      <div className="row">
        <div className="col-12 text-center">
          {showEditor && (
            <button onClick={() => setShowEditor(false)}>Close</button>
          )}
          {!showEditor && (
            <button onClick={() => setShowEditor(true)}>
              Add Task <span className="bi bi-plus-circle"></span>
            </button>
          )}
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-12">
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
        </div>
      </div>
    </>
  );
};

export default TaskPanel;
