import "./App.css";
import CreateNewDirectory from "./components/CreateNewDirectory";
import CreateNewTask from "./components/CreateNewTask";
import ListOfTasks from "./components/ListOfTasks";

function App() {
  return (
    <div>
      <CreateNewTask />
      <CreateNewDirectory />
      <ListOfTasks />
    </div>
  );
}

export default App;
