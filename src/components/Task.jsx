import "./Task.css";


let Task = function ({ title, description, id, completed, onDone, onDelete }) {
  return (
    <div className="task-card task">
      <div className="row">
        <div className="col-10 col-xxl-11">
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
        <div className="col-2 col-xxl-1">
          <div className="row">
            <div className="col-12">
              {completed.toString() == "true" ? (
                <button
                  onClick={() => onDone(id, false)}
                  className="btn btn-success btn-md task-btn"
                >
                  <span className="bi bi-check"></span>
                </button>
              ) : (
                <button
                  onClick={() => onDone(id, true)}
                  className="btn btn-light btn-md task-btn"
                >
                  <span className="bi bi-dash"></span>
                </button>
              )}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <button
                onClick={() => onDelete(id)}
                className="btn btn-danger btn-md task-btn"
              >
                <span className="bi bi-trash"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
