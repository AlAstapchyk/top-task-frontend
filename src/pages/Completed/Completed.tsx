import Header from "./components/Header";
import TaskSection from "./components/TaskSection";
import "./Completed.scss";

const Completed = () => {
  return (
    <div className="completed page">
      <Header />
      <TaskSection />
    </div>
  );
};

export default Completed;
