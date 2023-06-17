import React, { ReactNode } from "react";
import TaskItem from "./TaskItem";
import { Task } from "../../../redux/taskSlice";

interface TaskListProps {
  priority?: string;
  tasks: Task[];
}

const TaskList = ({ priority, tasks }: TaskListProps) => {
  return (
    <div className={`task-list ${priority}`}>
      <p className="task-list-title">Priority {priority}</p>
      <ul>
        {tasks
          .filter((task) => task.priority === `${priority}`)
          .map((task) => (
            <TaskItem
              id={task.id}
              title={task.title}
              description=""
              isComplete={task.isComplete}
            />
          ))}
      </ul>
    </div>
  );
};

export default TaskList;
