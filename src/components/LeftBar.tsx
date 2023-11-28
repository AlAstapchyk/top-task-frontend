import { Link, useNavigate } from "react-router-dom";
import {
  AllTasksSvg,
  CollapseLeftSvg,
  CompletedTasksSvg,
  SearchSvg,
  SunSvg,
  UpcomingTasksSvg,
  VerticalPriorityGradient,
} from "../../public/assets/svgs";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setLeftPanelIsOpen, setSearchValue } from "../redux/LeftBarSlice";
import { useState, useRef, useEffect } from "react";

const LeftBar: React.FC = () => {
  const leftPanel = useAppSelector((state) => state.leftBar);
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInputValue) navigate("/search");
  }, [searchInputValue]);

  const collapserOnClick = () => {
    dispatch(setLeftPanelIsOpen({ isOpen: !leftPanel.isOpen }));
  };

  const searchTabOnClick = () => {
    dispatch(setLeftPanelIsOpen({ isOpen: true }));
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 0);
    if (searchInputValue) navigate("/search");
  };

  const searchInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
    dispatch(setSearchValue({ searchValue: event.target.value }));
  };

  return (
    <div className={"leftbar " + (leftPanel.isOpen ? "open" : "close")}>
      <div className="navigation">
        <div className={"left-bar-collapser-container"}>
          <CollapseLeftSvg width={24} height={24} onClick={collapserOnClick}>
            <VerticalPriorityGradient />
          </CollapseLeftSvg>
        </div>
        <div className="search tab" onClick={searchTabOnClick}>
          <SearchSvg width={24} height={24}>
            <VerticalPriorityGradient />
          </SearchSvg>
          {leftPanel.isOpen && (
            <input
              className="search"
              placeholder="Search"
              ref={searchInputRef}
              value={searchInputValue}
              onChange={searchInputOnChange}
            />
          )}
        </div>

        <Link to="/all-tasks">
          <div className="tab">
            <AllTasksSvg width={24} height={24}>
              <VerticalPriorityGradient />
            </AllTasksSvg>
            {leftPanel.isOpen && (
              <>
                <p>All tasks</p>
                <div className="counter">
                  <span>{tasks.filter((task) => !task.isComplete).length}</span>
                </div>
              </>
            )}
          </div>
        </Link>
        <Link to="/today">
          <div className="tab">
            <SunSvg width={24} height={24}>
              <VerticalPriorityGradient />
            </SunSvg>
            {leftPanel.isOpen && (
              <>
                <p>Today</p>
                <div className="counter">
                  <span>2</span>
                </div>
              </>
            )}
          </div>
        </Link>
        <Link to="/upcoming">
          <div className="tab">
            <UpcomingTasksSvg width={24} height={24} />
            {leftPanel.isOpen && (
              <>
                <p>Upcoming</p>
                <div className="counter">
                  <span>2</span>
                </div>
              </>
            )}
          </div>
        </Link>
        <Link to="/completed">
          <div className="tab">
            <CompletedTasksSvg width={24} height={24} />
            {leftPanel.isOpen && (
              <>
                <p>Completed</p>
                <div className="counter">
                  <span>{tasks.filter((task) => task.isComplete).length}</span>
                </div>
              </>
            )}
          </div>
        </Link>
      </div>
      <div className="profile">
        <div className="profile-picture"></div>
        {/* <img alt="Profile picture"></img> */}
        {leftPanel.isOpen && (
          <div className="info">
            <p className="name">Aliaksandr Astapchyk</p>
            <p className="email">alastapchyk@gmail.com</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default LeftBar;
