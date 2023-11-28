import {
  CompletedTasksSvg,
  VerticalPriorityGradient,
} from "../../../../public/assets/svgs";

const Header = () => {
  return (
    <header className="page-header">
      <CompletedTasksSvg width={40} height={40} className="completed page-svg">
        <VerticalPriorityGradient />
      </CompletedTasksSvg>
      <p className="title">Completed</p>
    </header>
  );
};

export default Header;
