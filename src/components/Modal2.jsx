import React from 'react'
import warning from '../assets/warning.png'
import './Modal2.css'

const Modal2 = ({isOpen, onClose}) => {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay">
        <div className="modal-content">
            <div className="warning-head">
                <h3><img src={warning} alt="warning" /><span>DELETE CONFIRMATION</span></h3>
            </div>
            <div className="warning-details">
                <div className="warning-details-head">
                    <p>Are you sure you want to delete this product?</p>
                </div>
                <div className="warning-details-goods">
                    <p><span className='label'>Product ID:</span>129381928</p>
                    <p><span className='label'>Brand:</span>ItemBrandName</p>
                    <p><span className='label'>Product Name:</span>ItemName</p>
                    <p><span className='label'>Category:</span>ItemCategory</p>
                </div>
                <button onClick={onClose}>Cancel</button>
                <button>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Modal2