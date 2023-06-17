import "./AllTasks.scss";
import Header from "./components/Header";
import TaskSection from "./components/TaskSection";

interface AllTasksProps {}

const AllTasks: React.FC<AllTasksProps> = () => {
  return (
    <div className="all-tasks">
      <Header/>
      <TaskSection/>
    </div>
  );
};

export default AllTasks;
