import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteConfirmation({ showModal, handleCloseModal, deleteTask, selectedTask }) {
  return (
    <>
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="text-center">
            <p>Are you sure want to Delete?</p>
            <Button variant="success" onClick={() => deleteTask(selectedTask)} className="btn-sm px-3 me-3">
              Yes
            </Button>
            <Button variant="danger" className="btn-sm px-3" onClick={handleCloseModal}>
              No
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeleteConfirmation;
