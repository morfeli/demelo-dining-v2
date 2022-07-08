import { useState, useEffect } from "react";

import ReactDOM from "react-dom";

const Modal = ({ show, children, onClose }) => {
  const [sendPortal, sentSendPortal] = useState(false);

  useEffect(() => {
    sentSendPortal(true);
  }, []);

  let modalContent = show ? (
    <div>
      <div>
        <p>{children}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ) : null;

  if (sendPortal) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
