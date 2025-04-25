import reactLogo from "../assets/react.svg";
import "./Header.css";
let Header = function () {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a className="navbar-brand" href="#">
        Task Tracker
      </a>
    </nav>
  );
};

export default Header;
