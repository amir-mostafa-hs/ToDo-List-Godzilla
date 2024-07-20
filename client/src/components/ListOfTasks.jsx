/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { useLocation, useParams } from "react-router-dom";
import SelectOption from "./SelectOption";
import { useEffect, useState } from "react";

const ListOfTasks = () => {
  const tasksData = useSelector((store) => store.tasks);
  const location = useLocation();
  const params = useParams();
  const singleData = tasksData.find((task) => task.id === params.id);

  const [sortData, setSortData] = useState([]);
  useEffect(() => {
    setSortData(tasksData);
  }, [tasksData]);
  return (
    <>
      <SelectOption setSort={setSortData} data={sortData} />
      {location.pathname !== "/" ? (
        <TaskCard data={singleData} />
      ) : (
        sortData?.map((task) => <TaskCard key={task.id} data={task} />)
      )}
    </>
  );
};

export default ListOfTasks;
