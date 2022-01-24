import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onDismiss, content, headerText, actions }) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => {
        onDismiss();
      }}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {headerText}
          <i
            style={{ cursor: "pointer" }}
            onClick={() => onDismiss()}
            className="close icon"
          ></i>
        </div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
