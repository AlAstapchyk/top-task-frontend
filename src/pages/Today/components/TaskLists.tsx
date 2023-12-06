import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  PriorityLevel,
  setPriorityPositionTask,
} from "../../../redux/taskSlice";
import TaskList from "./TaskList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { isToday } from "date-fns";

const TaskLists = () => {
  const uncompletedTasks = useAppSelector((state) => state.tasks).filter(
    (task) => !task.isComplete
  );
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
    const taskDraggable = uncompletedTasks.find(
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
          tasks={uncompletedTasks
            .filter(
              (task) => task.priority === `A` && task?.due && isToday(task.due)
            )
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
        <TaskList
          priority="B"
          tasks={uncompletedTasks
            .filter(
              (task) => task.priority === `B` && task?.due && isToday(task.due)
            )
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
        <TaskList
          priority="C"
          tasks={uncompletedTasks
            .filter(
              (task) => task.priority === `C` && task?.due && isToday(task.due)
            )
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
        <TaskList
          priority="D"
          tasks={uncompletedTasks
            .filter(
              (task) => task.priority === `D` && task?.due && isToday(task.due)
            )
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
        <TaskList
          priority="E"
          tasks={uncompletedTasks
            .filter(
              (task) => task.priority === `E` && task?.due && isToday(task.due)
            )
            .sort((a, b) => a.priorityPosition - b.priorityPosition)}
        />
      </DragDropContext>
    </div>
  );
};

export default TaskLists;
