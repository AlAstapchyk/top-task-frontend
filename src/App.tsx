import './shared/shared.scss'
import LeftBar from "./shared/components/LeftBar";
import AllTasks from "./pages/AllTasks"
import { Route, Routes } from 'react-router-dom';
import Upcoming from './pages/Upcoming';
import Today from './pages/Today';

const App: React.FC = () => {
  return <div className="App">
    <LeftBar/>
    <Routes>
      <Route path="/top-tasks/today" element={<Today/>}/>
      <Route path="/top-tasks/upcoming/" element={<Upcoming/>}/>
      <Route path="/top-tasks/" element={<AllTasks/>}/>
    </Routes>
  </div>;
}

export default App;
