import {
  SearchSvg,
  VerticalPriorityGradient,
} from "../../../../public/assets/svgs";

const Header = () => {
  return (
    <header className="page-header">
      <SearchSvg width={40} height={40} className="search page-svg">
        <VerticalPriorityGradient />
      </SearchSvg>
      <p className="title">Search</p>
    </header>
  );
};

export default Header;
