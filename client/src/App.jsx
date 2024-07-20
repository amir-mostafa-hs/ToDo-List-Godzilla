import "./App.css";
import CreateNewDirectory from "./components/CreateNewDirectory";
import CreateNewTask from "./components/CreateNewTask";
import ListOfTasks from "./components/ListOfTasks";
import { Route, Routes } from "react-router-dom";
import SingleTaskCard from "./components/SingleTaskCard";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div>
      <SearchInput />
      <CreateNewTask />
      <CreateNewDirectory />
      <Routes>
        <Route path="/" element={<ListOfTasks />}>
          {/* <Route path="/task/:id" element={<></>} /> */}
        </Route>
        <Route path="/task/:id" element={<SingleTaskCard />} />
      </Routes>
    </div>
  );
}

export default App;
