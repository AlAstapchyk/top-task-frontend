import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  PriorityLevel,
  Task,
  setPriorityPositionTask,
} from "../../../redux/taskSlice";
import TaskList from "./TaskList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const TaskLists = ({ uncompletedTodayTasks }: { uncompletedTodayTasks: Task[] }) => {
  const dispatch = useAppDispatch();

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

    // Reorder the items array based on the drag and drop result
    const draggableIdNum = Number(draggableId);
    const taskDraggable = uncompletedTodayTasks.find(
      (task) => task.id === draggableIdNum
    );
    if (taskDraggable) {
      const destinationPosition = destination.index + 1;

      dispatch(
        setPriorityPositionTask({
          id: draggableIdNum,
          newPosition: destinationPosition,
          newPriority: destination.droppableId as PriorityLevel,
        })
      );
    }
  };

  return (
    <div className="task-lists scroll-content">
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskList
          priority="A"
          tasks={uncompletedTodayTasks
            .filter((task) => task.priority === `A`)
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
        <TaskList
          priority="B"
          tasks={uncompletedTodayTasks
            .filter((task) => task.priority === `B`)
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
        <TaskList
          priority="C"
          tasks={uncompletedTodayTasks
            .filter((task) => task.priority === `C`)
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
        <TaskList
          priority="D"
          tasks={uncompletedTodayTasks
            .filter((task) => task.priority === `D`)
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
        <TaskList
          priority="E"
          tasks={uncompletedTodayTasks
            .filter((task) => task.priority === `E`)
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
      </DragDropContext>
    </div>
  );
};

export default TaskLists;
