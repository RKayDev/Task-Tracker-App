import "./App.css";

import Header from "./components/Header";
import TaskPanel from "./components/TaskPanel";
import { useState, useEffect } from "react";

//let apiUrl = "http://192.168.0.106:81";
let herokuURL = 'https://tasktracker-api-75312bd20c21.herokuapp.com';
let userid = 1;
let fetchTasks = function (setTasks) {
  fetch(herokuURL + `/api/tasks/${userid}`)
    .then((res) => {
      if (res != undefined) return res.json();
    })
    .then((json) => {      
      setTasks(json);
    })
    .catch((err) => {
      console.error("Error fetching:", err);
      setTasks([{ title: "No Tasks Yet!!!", description: "Make a new task => " }]);
    });
};

function App() {
  let [tasks, setTasks] = useState([]);

  useEffect(() => fetchTasks(setTasks), []);
  return (
    <>
      <section id="trackerApp">
        <div className="row">
          <div className="col-12 banner">
            <Header></Header>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12">
            <TaskPanel tasks={tasks}></TaskPanel>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
