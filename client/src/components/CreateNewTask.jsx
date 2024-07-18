import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";

const CreateNewTask = () => {
  const directory = useSelector((store) => store.directories);
  const dispatch = useDispatch();

  const [fromData, setFromData] = useState({
    title: "fffffffffffffff",
    date: null,
    description: "",
    directory: "",
    important: false,
    status: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ ...fromData, id: Math.floor(Math.random() * 1000) }));
  };

  const handleInputs = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="title" name="title" onChange={handleInputs} />
      <input
        type="datetime-local"
        id="date"
        name="date"
        onChange={handleInputs}
      />
      <textarea
        name="description"
        id="description"
        onChange={handleInputs}
      ></textarea>
      <select name="directory" id="directory" onChange={handleInputs}>
        <option value={null}>select directory</option>
        {directory.map((item) => (
          <option key={item.id} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
      <label htmlFor="important">important</label>
      <input
        type="radio"
        name="important"
        id="important"
        checked={fromData.important}
        onClick={() =>
          setFromData({ ...fromData, important: !fromData.important })
        }
      />
      <label htmlFor="status">status</label>
      <input
        type="radio"
        name="status"
        id="status"
        checked={fromData.status}
        onClick={() => setFromData({ ...fromData, status: !fromData.status })}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateNewTask;
