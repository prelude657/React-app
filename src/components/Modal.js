import { useState } from "react";
import Backdrop from "./Backdrop";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function byeHandler() {
    props.onBye();
  }

  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        {" "}
        Cancel
      </button>
      <button className="btn" onClick={byeHandler}>
        {" "}
        Confirm
      </button>
    </div>
  );
}
export default Modal;
