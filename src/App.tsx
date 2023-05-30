import './shared/shared.scss'
import LeftBar from "./shared/components/LeftBar";
import AllMyTasks from "./pages/AllMyTasks"

const App: React.FC = () => {
  return <div className="App">
    <LeftBar/>
    <AllMyTasks/>
  </div>;
}

export default App;
