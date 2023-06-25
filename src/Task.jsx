import React from "react";

const Task = ({ task, handleShowModal, setSelectedTask, handleTaskCompletion }) => {
  return (
    <>
      <tr key={task.id}>
        <td>{task.name}</td>
        <td>{task.description}</td>
        <td className="text-nowrap">{task.dueDate}</td>
        <td> {task.completed ? <span className="badge bg-success">Completed</span> : <span className="badge bg-warning">Incomplete</span>}</td>
        <td className="text-nowrap">
          <input key={task.id} className="form-check-input border-secondary me-3" type="checkbox" checked={task.completed} onChange={() => handleTaskCompletion(task.id)} />

          <i
            className="fa fa-trash text-danger"
            onClick={() => {
              handleShowModal();
              setSelectedTask(task.id);
            }}
            aria-hidden="true"
          ></i>
        </td>
      </tr>
    </>
  );
};

export default Task;
