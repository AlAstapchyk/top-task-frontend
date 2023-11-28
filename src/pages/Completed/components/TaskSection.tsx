import TaskLists from "./TaskLists";

const TaskSection = () => {
  return (
    <section className="task-section">
        <div className="scroll-container">
          <TaskLists/>
        </div>
    </section>
  );
};

export default TaskSection;