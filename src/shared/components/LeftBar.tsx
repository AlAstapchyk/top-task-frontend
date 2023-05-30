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
        <div className="nav__tab">
          <img alt="All my tasks"></img>
          <p>All my tasks</p>
          <span>3</span>
        </div>
        <div className="nav__tab">
          <img alt="My day"></img>
          <p>My day</p>
          <span>1</span>
        </div>
        <div className="nav__tab">
          <img alt="Next 7 days"></img>
          <p>Next 7 days</p>
          <span>2</span>
        </div>
      </div>
    </div>
  );
};
export default LeftBar;
