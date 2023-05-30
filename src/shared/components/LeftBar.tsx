import { Link } from "react-router-dom";

const LeftBar: React.FC = () => {
  return (
    <div className="leftbar">
      <div className="leftbar__profile">
        <img alt="Profile picture"></img>
        <div className="profile__info">
          <p className="info__name">Name LastName</p>
          <p className="info__email">top-tasks@gmail.com</p>
        </div>
      </div>
      <div className="leftbar__nav">
        <Link to="/top-tasks/">
          <div className="nav__tab">
            <img alt="All tasks"></img>
            <p>All tasks</p>
            <span>3</span>
          </div>
        </Link>
        <Link to="/top-tasks/today">
          <div className="nav__tab">
            <img alt="Today"></img>
            <p>Today</p>
            <span>1</span>
          </div>
        </Link>
        <Link to="/top-tasks/upcoming">
          <div className="nav__tab">
            <img alt="Upcoming"></img>
            <p>Upcoming</p>
            <span>2</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default LeftBar;
