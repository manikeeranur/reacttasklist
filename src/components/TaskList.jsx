import Task from "../Task";

const TaskList = ({ tasks, handleShowModal, setSelectedTask, handleTaskCompletion }) => {
  return (
    <>
      <h2 className="text-light">Task List</h2>
      <div className="card p-2">
        <div className="panel">
          <table class="table table-striped border">
            <thead className="sticky-top">
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th className="text-nowrap">Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <Task task={task} handleShowModal={handleShowModal} setSelectedTask={setSelectedTask} handleTaskCompletion={handleTaskCompletion} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TaskList;
