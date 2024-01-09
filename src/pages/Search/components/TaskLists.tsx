import { useLayoutEffect, useState } from "react";
import TaskList from "./TaskList";
import { Task } from "../../../redux/taskSlice";

const TaskLists = ({ searchingTasks }: { searchingTasks: Task[] }) => {
  const [taskLists, setTaskLists] = useState<Array<Task[]>>([
    [],
    [],
    [],
    [],
    [],
  ]);

  useLayoutEffect(() => {
    if (!searchingTasks) return;

    const newTaskLists = [
      searchingTasks.filter((task) => task.priority === "A"),
      searchingTasks.filter((task) => task.priority === "B"),
      searchingTasks.filter((task) => task.priority === "C"),
      searchingTasks.filter((task) => task.priority === "D"),
      searchingTasks.filter((task) => task.priority === "E"),
    ];

    console.log(newTaskLists);

    setTaskLists(newTaskLists);
  }, [searchingTasks]);

  return (
    <div className="task-lists scroll-content">
      {taskLists[0].length !== 0 && (
        <TaskList priority="A" tasks={taskLists[0]} />
      )}
      {taskLists[1].length !== 0 && (
        <TaskList priority="B" tasks={taskLists[1]} />
      )}
      {taskLists[2].length !== 0 && (
        <TaskList priority="C" tasks={taskLists[2]} />
      )}
      {taskLists[3].length !== 0 && (
        <TaskList priority="D" tasks={taskLists[3]} />
      )}
      {taskLists[4].length !== 0 && (
        <TaskList priority="E" tasks={taskLists[4]} />
      )}
    </div>
  );
};

export default TaskLists;
