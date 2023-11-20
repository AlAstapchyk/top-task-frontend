import { Link } from "react-router-dom";
import {
  AllTasksSvg,
  SunSvg,
  UpcomingTasksSvg,
  VerticalPriorityGradient,
} from "../../public/assets/svgs";

const LeftBar: React.FC = () => {
  return (
    <div className="leftbar">
      <div className="navigation">
        <input className="search" placeholder="Search" />
        <Link to="/all-tasks">
          <div className="tab">
            <AllTasksSvg width={24} height={24}>
              <VerticalPriorityGradient />
            </AllTasksSvg>
            <p>All tasks</p>
            <span>3</span>
          </div>
        </Link>
        <Link to="/today">
          <div className="tab">
            <SunSvg width={24} height={24}>
              <VerticalPriorityGradient />
            </SunSvg>
            <p>Today</p>
            <span>1</span>
          </div>
        </Link>
        <Link to="/upcoming">
          <div className="tab">
            <UpcomingTasksSvg width={24} height={24} />
            <p>Upcoming</p>
            <span>2</span>
          </div>
        </Link>
      </div>
      <div className="profile">
        <div className="profile-picture"></div>
        {/* <img alt="Profile picture"></img> */}
        <div className="info">
          <p className="name">Aliaksandr Astapchyk</p>
          <p className="email">alastapchyk@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default LeftBar;
