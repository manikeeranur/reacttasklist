import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Button from "react-bootstrap/Button";
import "./App.css";
import DeleteConfirmation from "./components/DeleteConfirmation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState();

  // canvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Modal
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  // Add Task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    toast.success("Task Added Successfully");
  };

  // Task Delete
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setShowModal(false);
    toast.success("Task Removed Successfully");
  };

  // Task Completion checkbox
  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-light">Task Manager</h1>
        <hr className="border-light" />
        <div className="text-end">
          <Button variant="success" onClick={handleShow}>
            <i className="fa fa-plus" aria-hidden="true"></i> Add Task
          </Button>
        </div>

        <TaskForm addTask={addTask} show={show} handleClose={handleClose} />
        <TaskList tasks={tasks} handleShowModal={handleShowModal} setSelectedTask={setSelectedTask} handleTaskCompletion={handleTaskCompletion} />
        <DeleteConfirmation showModal={showModal} handleCloseModal={handleCloseModal} deleteTask={deleteTask} selectedTask={selectedTask} />
        <ToastContainer />
      </div>
    </>
  );
};

export default App;
