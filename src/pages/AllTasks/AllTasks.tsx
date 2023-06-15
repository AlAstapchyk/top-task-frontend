import "./AllTasks.scss";
import TaskSection from "./components/TaskSection";

interface AllTasksProps {}

const AllTasks: React.FC<AllTasksProps> = () => {
  return (
    <div className="all-tasks">
      <header className="">
        <img className="page-img" src="" alt="all tasks" />
        <p>All tasks</p>
        <img className="options" src="" alt="options" />
      </header>
      <TaskSection/>
    </div>
  );
};

export default AllTasks;
