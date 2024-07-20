/* eslint-disable react/prop-types */
function SelectOption({ setSort, data }) {
  function handleChange(e) {
    switch (e.target.value) {
      case "old":
        setSort(
          [...data].sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          })
        );
        break;
      case "new":
        setSort(
          [...data].sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
          })
        );
        break;
      case "completed":
        setSort(
          [...data].sort(function (a, b) {
            return Number(b.status) - Number(a.status);
          })
        );
        break;
      case "uncompleted":
        setSort(
          [...data].sort(function (a, b) {
            return Number(a.status) - Number(b.status);
          })
        );
        break;

      default:
        break;
    }
  }

  return (
    <select style={{ marginTop: "30px" }} onChange={handleChange}>
      <option value="sort">sort</option>
      <option value="old">old</option>
      <option value="new">new</option>
      <option value="completed">completed</option>
      <option value="uncompleted">uncompleted</option>
    </select>
  );
}
export default SelectOption;
