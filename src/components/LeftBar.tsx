import { Link } from "react-router-dom";

const LeftBar: React.FC = () => {
  return (
    <nav className="leftbar">
      <div className="profile">
        <img alt="Profile picture"></img>
        <div className="info">
          <p className="name">Name LastName</p>
          <p className="email">top-tasks@gmail.com</p>
        </div>
      </div>
      <div className="nav">
        <Link to="/top-tasks/all-tasks">
          <div className="tab">
            <img alt="All tasks"></img>
            <p>All tasks</p>
            <span>3</span>
          </div>
        </Link>
        <Link to="/top-tasks/today">
          <div className="tab">
            <img alt="Today"></img>
            <p>Today</p>
            <span>1</span>
          </div>
        </Link>
        <Link to="/top-tasks/upcoming">
          <div className="tab">
            <img alt="Upcoming"></img>
            <p>Upcoming</p>
            <span>2</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default LeftBar;
