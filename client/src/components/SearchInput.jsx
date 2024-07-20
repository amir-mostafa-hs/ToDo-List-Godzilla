import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useSelector } from "react-redux";

function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState([
    {
      title: "test",
      id: "test",
    },
  ]);
  const tasksData = useSelector((store) => store.tasks);

  function handleInput(e) {
    setSearchValue(e.target.value);
    const data = tasksData.filter((item) => {
      return item.title.includes(e.target.value);
    });
    setDropdownValue(data);
  }
  return (
    <>
      {/* <input
        type="text"
        name=""
        id=""
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      /> */}
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Text input with dropdown button"
          value={searchValue}
          onChange={handleInput}
        />

        <DropdownButton
          variant="outline-secondary"
          title="?"
          id="input-group-dropdown-2"
          align="start"
          show={searchValue === "" ? false : true}
        >
          {/* <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item> */}
          {dropdownValue.map((Item) => (
            <Dropdown.Item href={`/task/${Item.id}`} key={Item.id}>
              {Item.title}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
    </>
  );
}
export default SearchInput;
