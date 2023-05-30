import s from './AllMyTasks.module.scss'

interface AllMyTasksProps {}

const AllMyTasks: React.FC<AllMyTasksProps> = () => {
  return (
    <div className="main-view">
      <div>
        {/* <img alt="All my tasks"></img> */}
        <p>All my tasks</p>
      </div>
    </div>
  );
};

export default AllMyTasks;
