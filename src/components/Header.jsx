import "./Header.css";
let Header = function () {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a href="#" target="_blank">
        <img src="/tasker.png" className="logo react" alt="Tasker logo" />
      </a>
      <a className="navbar-brand" href="#">
        Task Tracker
      </a>
    </nav>
  );
};

export default Header;
