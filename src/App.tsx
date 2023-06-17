import "./styles/variables.scss";
import LeftBar from "./components/LeftBar";
import AllTasks from "./pages/AllTasks/AllTasks";
import { Route, Routes } from "react-router-dom";
import Upcoming from "./pages/Upcoming/Upcoming";
import Today from "./pages/Today/Today";
import RightPanel from "./components/RightPanel";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {

  const onDragEnd = (resault: DropResult) => {
    const { destination, source, draggableId } = resault;
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <LeftBar />
        <div className="main-view">
          <Routes>
            <Route path="/top-tasks/today" element={<Today />} />
            <Route path="/top-tasks/upcoming/" element={<Upcoming />} />
            <Route path="/top-tasks/all-tasks" element={<AllTasks />} />
          </Routes>
        </div>
        <RightPanel />
      </DragDropContext>
    </div>
  );
};

export default App;

// interface Item {
//   id: string;
//   content: string;
// }

// const initialItems: Item[] = [
//   { id: '1', content: 'Item 1' },
//   { id: '2', content: 'Item 2' },
//   { id: '3', content: 'Item 3' },
// ];

//   return (
//     <div>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="droppable">
//           {(provided:any) => (
//             <div ref={provided.innerRef} {...provided.droppableProps}>
//               {items.map((item, index) => (
//                 <Draggable key={item.id} draggableId={item.id} index={index}>
//                   {(provided:any) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       {item.content}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };
