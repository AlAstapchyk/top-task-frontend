import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  PriorityLevel,
  setPositionTask,
  setPriorityTask,
} from "../../../redux/taskSlice";
import TaskList from "./TaskList";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

const TaskLists = () => {
  const tasks = useAppSelector((state) => state.tasks);
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

    dispatch(
      setPriorityTask({
        id: draggableIdNum,
        priority: destination.droppableId as PriorityLevel,
      })
    );

    const taskDraggable = tasks.find((task) => task.id === draggableIdNum);
    const destinationPosition = destination.index + 1;

    if (taskDraggable) {
      if (taskDraggable.position > destinationPosition) {
        dispatch(
          setPositionTask({
            id: draggableIdNum,
            newPosition: destinationPosition,
            isRestIncrease: true,
          })
        );
      } else
        dispatch(
          setPositionTask({
            id: draggableIdNum,
            newPosition: destinationPosition,
            isRestDecrease: true,
          })
        );
    }
  };

  return (
    <div className="task-lists scroll-content">
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskList priority="A" tasks={tasks} />
        <TaskList priority="B" tasks={tasks} />
        <TaskList priority="C" tasks={tasks} />
        <TaskList priority="D" tasks={tasks} />
        <TaskList priority="E" tasks={tasks} />
      </DragDropContext>
    </div>
  );
};

export default TaskLists;
