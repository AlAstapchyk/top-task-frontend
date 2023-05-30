import './AllTasks.scss'

interface AllTasksProps {}

const AllTasks: React.FC<AllTasksProps> = () => {
  return (
    <div className="main-view">
      <div className="all-tasks">
        <p>All tasks</p>
      </div>
    </div>
  );
};

export default AllTasks;
