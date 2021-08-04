import React, { useState } from 'react';
import './styles.scss';

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <div className="modalOverlay" onClick={() => toggleModal()} />,
    <div className="modalWrap">
      <div className="modal-1">
        {children}
      </div>
    </div>
  ];
}

export default Modal;