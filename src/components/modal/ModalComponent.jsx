import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ show, onClose, content }) => {
  if (!show) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h2>Detalhes da Opção</h2>
        <p>{content}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalComponent;