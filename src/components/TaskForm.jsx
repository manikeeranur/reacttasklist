import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { toast } from "react-toastify";

const TaskForm = ({ addTask, show, handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || description.trim() === "" || dueDate.trim() === "") {
      return toast.error("Please fill out all required fields.");
    }

    const newTask = {
      id: Date.now(),
      name,
      description,
      dueDate,
    };

    addTask(newTask);
    setName("");
    setDescription("");
    setDueDate("");
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Task</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="taskname">Task Name</label>
                <input type="text" id="taskname" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="desc">Description</label>
                <textarea id="desc" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="duedate">Due Date</label>
                <input type="date" id="duedate" className="form-control" placeholder="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-primary btn-sm  ">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TaskForm;
