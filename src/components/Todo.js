import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import Loop from "./Loop";

function Todo(props) {
  //Use states that I am learning
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /* Use States for the number counter (see bottom under the class name "yummy") */
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  // The following two functions show
  //alter the state of the  setModalState from
  //true to false when the function is called
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2 className="hello">{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          {" "}
          Delete
        </button>
      </div>

      {/* changes to the modal by using react hooks */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onBye={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}

      {/* React hook number counter*/}
      <div className="yummy">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <p>You Deleted {age}</p>
        <button
          onClick={() => setAge(age + 1) & setCount(count - 1)}
          className="storm"
        >
          Delete me
        </button>
        <Loop />
      </div>
    </div>
  );
}

export default Todo;
