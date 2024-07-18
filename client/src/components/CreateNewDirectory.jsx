import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDirectory } from "../store/directoriesSlice";

const CreateNewDirectory = () => {
  const dispatch = useDispatch();

  const [fromData, setFromData] = useState({
    title: "fffffffffffffff",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addDirectory({ ...fromData, id: Math.floor(Math.random() * 1000) })
    );
  };

  const handleInputs = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="title" name="title" onChange={handleInputs} />
      <textarea
        name="description"
        id="description"
        onChange={handleInputs}
      ></textarea>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateNewDirectory;
