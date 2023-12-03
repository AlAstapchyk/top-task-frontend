import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  PriorityLevel,
  setPriorityPositionTask,
} from "../../../redux/taskSlice";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

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
        <div className="card">
          <div className="scroll-container">
            <div className="scroll-content">
              <TaskList
                dateNum={-1}
                tasks={uncompletedTasks.sort(
                  (a, b) => a.priorityPosition - b.priorityPosition
                )}
              />
            </div>
          </div>
          <TaskForm />
        </div>
        <div className="card">
          <div className="scroll-container">
            <div className="scroll-content">
              <TaskList
                dateNum={0}
                tasks={uncompletedTasks.sort(
                  (a, b) => a.priorityPosition - b.priorityPosition
                )}
              />
            </div>
          </div>
          <TaskForm />
        </div>
        <div className="card">
          <div className="scroll-container">
            <div className="scroll-content">
              <TaskList
                dateNum={1}
                tasks={uncompletedTasks.sort(
                  (a, b) => a.priorityPosition - b.priorityPosition
                )}
              />
            </div>
          </div>
          <TaskForm />
        </div>
        <div className="card">
          <div className="scroll-container">
            <div className="scroll-content">
              <TaskList
                dateNum={2}
                tasks={uncompletedTasks.sort(
                  (a, b) => a.priorityPosition - b.priorityPosition
                )}
              />
            </div>
          </div>
          <TaskForm />
        </div>
        <div className="card">
          <div className="scroll-container">
            <div className="scroll-content">
              <TaskList
                dateNum={3}
                tasks={uncompletedTasks.sort(
                  (a, b) => a.priorityPosition - b.priorityPosition
                )}
              />
            </div>
          </div>
          <TaskForm />
        </div>
        <div className="card">
          <div className="scroll-container">
            <div className="scroll-content">
              <TaskList
                dateNum={4}
                tasks={uncompletedTasks.sort(
                  (a, b) => a.priorityPosition - b.priorityPosition
                )}
              />
            </div>
          </div>
          <TaskForm />
        </div>
        <div className="card">
          <div className="scroll-container">
            <div className="scroll-content">
              <TaskList
                dateNum={5}
                tasks={uncompletedTasks.sort(
                  (a, b) => a.priorityPosition - b.priorityPosition
                )}
              />
            </div>
          </div>
          <TaskForm />
        </div>
        <div className="card">
          <div className="scroll-container">
            <div className="scroll-content">
              <TaskList
                dateNum={6}
                tasks={uncompletedTasks.sort(
                  (a, b) => a.priorityPosition - b.priorityPosition
                )}
              />
            </div>
          </div>
          <TaskForm />
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskLists;
