import "./App.css";

import Header from "./components/Header";
import TaskPanel from "./components/TaskPanel";

function App() {
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
            <TaskPanel></TaskPanel>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
