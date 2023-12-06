import "./Upcoming.scss";
import Header from "./components/Header";
import TaskSection from "./components/TaskSection";

interface UpcomingProps {}

const Upcoming: React.FC<UpcomingProps> = () => {
  return (
    <div className="upcoming">
      <Header />
      <TaskSection />
    </div>
  );
};

export default Upcoming;
