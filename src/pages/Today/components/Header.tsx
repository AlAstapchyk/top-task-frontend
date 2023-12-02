import {
  SunSvg,
  ThreeDotsSvg,
  VerticalPriorityGradient,
} from "../../../../public/assets/svgs";

const Header = () => {
  return (
    <header className="">
      <SunSvg width={40} height={40} className="today page-svg">
        <VerticalPriorityGradient />
      </SunSvg>
      <p className="title">Today</p>
      <ThreeDotsSvg width={24} height={24}>
        <VerticalPriorityGradient />
      </ThreeDotsSvg>
    </header>
  );
};

export default Header;
