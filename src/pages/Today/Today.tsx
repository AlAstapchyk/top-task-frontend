import "./Today.scss";
import Header from "./components/Header";
import TaskSection from "./components/TaskSection";

interface AllTasksProps {}

const AllTasks: React.FC<AllTasksProps> = () => {
  return (
    <div className="today">
      <Header/>
      <TaskSection/>
    </div>
  );
};

export default AllTasks;
