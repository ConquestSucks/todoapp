
import './App.css';
import Task from './components/Task';
import { taskStore } from "./task.store"

function App() {
  const tasks = taskStore.getTasks
/*   const list = tasks.map((id, name) => (

  )) */
  return (
    <div className="App">
      <ul>
  
      </ul>
    </div>
  );
}

export default App;
