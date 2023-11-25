import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import TaskList from "./TaskList";
import { Task } from "../../../redux/taskSlice";

const TaskLists = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const leftBar = useAppSelector((state) => state.leftBar);
  const [taskLists, setTaskLists] = useState<Array<Task[]>>([
    [],
    [],
    [],
    [],
    [],
  ]);

  useEffect(() => {
    if (!tasks) return;

    const newTaskLists = [
      tasks.filter(
        (task) =>
          task.priority === "A" &&
          task.title.toLowerCase().includes(leftBar.searchValue.toLowerCase())
      ),
      tasks.filter(
        (task) =>
          task.priority === "B" &&
          task.title.toLowerCase().includes(leftBar.searchValue.toLowerCase())
      ),
      tasks.filter(
        (task) =>
          task.priority === "C" &&
          task.title.toLowerCase().includes(leftBar.searchValue.toLowerCase())
      ),
      tasks.filter(
        (task) =>
          task.priority === "D" &&
          task.title.toLowerCase().includes(leftBar.searchValue.toLowerCase())
      ),
      tasks.filter(
        (task) =>
          task.priority === "E" &&
          task.title.toLowerCase().includes(leftBar.searchValue.toLowerCase())
      ),
    ];

    console.log(newTaskLists);

    setTaskLists(newTaskLists);
  }, [tasks, leftBar]);

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
