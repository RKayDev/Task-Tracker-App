import "./Task.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let Task = function ({ title, description }) {
  return (
    <div className="task-card task">
      <div className="row">
        <div className="col-8 col-xxl-10">
          <div className="card-title">
            <h3>
              <u>{title}</u>
            </h3>
          </div>
          <div className="card-text">
            <p>
              <i>{description}</i>
            </p>
          </div>
        </div>
        <div className="col-4 col-xxl-2">
          <div className="row">
            <div className="col-10">
              <button
                onClick={() => toast("Task Done!", { type: "success" })}
                className="btn btn-success btn-lg task-btn"
              >
                Done
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <button
                onClick={() => toast("Task Deleted!", { type: "info" })}
                className="btn btn-danger btn-lg task-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Task;
