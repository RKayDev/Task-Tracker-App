import "./Task.css";


let Task = function ({ title, description, id, completed, onDone, onDelete }) {
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
              {completed.toString() == "true" ? (
                <button
                  onClick={() => onDone(id, false)}
                  className="btn btn-warning btn-lg task-btn"
                >
                  Undone
                </button>
              ) : (
                <button
                  onClick={() => onDone(id, true)}
                  className="btn btn-success btn-lg task-btn"
                >
                  Done
                </button>
              )}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <button
                onClick={() => onDelete(id)}
                className="btn btn-danger btn-lg task-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
