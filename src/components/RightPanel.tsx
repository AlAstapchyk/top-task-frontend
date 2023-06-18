const RightPanel = () => {
  return (
    <div className="right-panel">
      <div className="details">
        <div className="topbar">
          <img className="close"></img>
          <div className="list"></div>
          <div className="date"></div>
        </div>
        <div className="scroll-container">
          <div className="scroll-content">
            <div className="task A">
              <button className="complete-task"></button>
              <input></input>
              <img className="priority"></img>
            </div>
            <div className="subtasks">
              <div className="subtask">
                <button className="complete-subtask"></button>
                <input placeholder="Add subtask"></input>
              </div>
            </div>
            <div className="note">
              <input placeholder="Add note"></input>
            </div>
          </div>
        </div>
        <div className="footer">
          
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
