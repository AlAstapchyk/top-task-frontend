import {
  AllTasksSvg,
  ThreeDotsSvg,
  VerticalPriorityGradient,
} from "../../../../public/assets/svgs";

const Header = () => {
  return (
    <header className="">
      <AllTasksSvg width={40} height={40} className="all-tasks page-svg">
        <VerticalPriorityGradient />
      </AllTasksSvg>
      <p className="title">All tasks</p>
      <ThreeDotsSvg width={24} height={24}>
        <VerticalPriorityGradient />
      </ThreeDotsSvg>
    </header>
  );
};

export default Header;
