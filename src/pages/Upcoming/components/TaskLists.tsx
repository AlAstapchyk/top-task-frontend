import { useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Task, setDueTask } from "../../../redux/taskSlice";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const TaskLists = () => {
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const [sortedTasks, setSortedTasks] = useState<Task[] | []>();

  useLayoutEffect(() => {
    if (!tasks) return;
    const sortedTasks = [
      ...tasks
        .filter((task) => task.priority === "A")
        .sort((a, b) => a.priorityPosition - b.priorityPosition),
      ...tasks
        .filter((task) => task.priority === "B")
        .sort((a, b) => a.priorityPosition - b.priorityPosition),
      ...tasks
        .filter((task) => task.priority === "C")
        .sort((a, b) => a.priorityPosition - b.priorityPosition),
      ...tasks
        .filter((task) => task.priority === "D")
        .sort((a, b) => a.priorityPosition - b.priorityPosition),
      ...tasks
        .filter((task) => task.priority === "E")
        .sort((a, b) => a.priorityPosition - b.priorityPosition),
    ].filter((task) => !task?.isComplete);
    setSortedTasks(sortedTasks as Task[]);
  }, [tasks]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // Return if dropped outside the droppable area
    if (!destination) {
      return;
    }

    // Return if the item is dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (!sortedTasks?.length) return;
    // Reorder the items array based on the drag and drop result
    const draggableIdNum = Number(draggableId);
    const taskDraggable = sortedTasks.find(
      (task) => task.id === draggableIdNum
    );
    if (!taskDraggable) return;

    setTimeout(() => {
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + Number(destination.droppableId));
      dispatch(setDueTask({ id: taskDraggable.id, newDate: dueDate }));
    }, 0);
  };

  return (
    <div className="task-lists scroll-content">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="day card">
          <TaskList dateNum={-1} tasks={sortedTasks ?? []} />
          <TaskForm dateNum={-1} />
        </div>
        <div className="day card">
          <TaskList dateNum={0} tasks={sortedTasks ?? []} />
          <TaskForm dateNum={0} />
        </div>
        <div className="day card">
          <TaskList dateNum={1} tasks={sortedTasks ?? []} />
          <TaskForm dateNum={1} />
        </div>
        <div className="day card">
          <TaskList dateNum={2} tasks={sortedTasks ?? []} />
          <TaskForm dateNum={2} />
        </div>
        <div className="day card">
          <TaskList dateNum={3} tasks={sortedTasks ?? []} />
          <TaskForm dateNum={3} />
        </div>
        <div className="day card">
          <TaskList dateNum={4} tasks={sortedTasks ?? []} />
          <TaskForm dateNum={4} />
        </div>
        <div className="day card">
          <TaskList dateNum={5} tasks={sortedTasks ?? []} />
          <TaskForm dateNum={5} />
        </div>
        <div className="day card">
          <TaskList dateNum={6} tasks={sortedTasks ?? []} />
          <TaskForm dateNum={6} />
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskLists;
