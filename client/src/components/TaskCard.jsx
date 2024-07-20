/* eslint-disable react/prop-types */
import { editTask, removeTask } from "../store/tasksSlice";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";

const TaskCard = ({ data }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [fromData, setFromData] = useState({
    id: "",
    title: "",
    date: "",
    description: "",
    directory: "",
    important: false,
    status: false,
  });

  useEffect(() => {
    setFromData(data);
  }, [data]);

  const handleStatusBtn = () => {
    dispatch(editTask({ ...data, status: !data.status }));
  };

  const handleImportantBtn = () => {
    dispatch(editTask({ ...data, important: !data.important }));
  };

  const handleDeleteBtn = () => {
    dispatch(removeTask({ ...data }));
  };

  const handleEditBtn = () => {
    setShow(true);
  };

  const handleCloseBtn = () => {
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fromData);
    dispatch(editTask({ ...fromData }));
    handleCloseBtn();
  };

  const handleInputs = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>{data.date}</p>
      <button onClick={handleStatusBtn}>
        {data.status ? "completed" : "uncompleted"}
      </button>
      <button onClick={handleImportantBtn}>
        {data.important ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
          </svg>
        )}
      </button>
      <button onClick={handleDeleteBtn}>delete</button>
      <button onClick={handleEditBtn}>edit</button>

      <Modal show={show} onHide={handleCloseBtn}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={fromData.title}
                onChange={handleInputs}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                value={fromData.date}
                onChange={handleInputs}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={fromData.description}
                onChange={handleInputs}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Important</Form.Label>
              <Form.Check
                type="switch"
                checked={fromData.important}
                onChange={() =>
                  setFromData({ ...fromData, important: !fromData.important })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Status</Form.Label>
              <Form.Check
                type="switch"
                checked={fromData.status}
                onChange={() =>
                  setFromData({ ...fromData, status: !fromData.status })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBtn}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskCard;
