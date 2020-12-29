import React from "react";
import Modal from "react-modal";

const RemoveModal = (props) => {
  return (
    <Modal
      isOpen={!!props.isOpen}
      onRequestClose={props.handleCloseModal}
      closeTimeoutMS={200}
      className="modal"
      contentLabel="Remove Food"
      ariaHideApp={false}
    >
      <h3 className="modal__title">Are you sure you want to remove it?</h3>
      <div className="modal__buttons">
        <button className="button button--danger" onClick={props.onClickRemove}>
          Remove
        </button>
        <button
          className="button button--secondary"
          onClick={props.handleCloseModal}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default RemoveModal;
