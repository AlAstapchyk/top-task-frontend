import {
  UpcomingTasksSvg,
  ThreeDotsSvg,
  VerticalPriorityGradient,
} from "../../../../public/assets/svgs";

const Header = () => {
  return (
    <header className="">
      <UpcomingTasksSvg width={40} height={40} className="upcoming page-svg">
        <VerticalPriorityGradient />
      </UpcomingTasksSvg>
      <p className="title">Upcoming</p>
      <ThreeDotsSvg width={24} height={24}>
        <VerticalPriorityGradient />
      </ThreeDotsSvg>
    </header>
  );
};

export default Header;
