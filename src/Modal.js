import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ visible, toggle, imgURL}) => visible ? ReactDOM.createPortal(
  <div className="modal">
    <div className="modal-pop grid-modal" role="dialog" aria-modal="true">
        <button type="button" className="closeButton" onClick={toggle}>Close</button>
        <img className="modal-img" src={imgURL}/>
    </div>  
    <div className="modal-overlay"></div>    
  </div>, document.body
) : null;

export default Modal;