
/**
 * Modal component.
 * 
 * @returns {JSX.Element} The rendered modal component.
 */
import React from 'react'
import './Modal.css'

function Modal({children, closeModal}) {
    return (
        <div className="modal">
            <div className="modalContent">
                <span className="close" onClick={closeModal}>&times;</span>
                {children}
            </div>
        </div>
    )
}

export default Modal
