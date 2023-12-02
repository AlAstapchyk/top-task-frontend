import TaskForm from "./TaskForm";
import TaskLists from "./TaskLists";

const TaskSection = () => {
  return (
    <section className="task-section">
        <div className="scroll-container">
          <TaskLists/>
        </div>
        <TaskForm/>
    </section>
  );
};

export default TaskSection;