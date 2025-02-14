import React from 'react'
import longshirt from '../assets/longshirt.png'
import './Modal.css';

const Modal1 = ({isOpen, onClose}) => {
    if (!isOpen) return null;
  return (
    <div className="modal-overlay-1">
    <div className="modal-content-1">
        {/* Left Side - Product Image */}
        <div className="left-modal">
            <img src={longshirt} alt="longshirt" />
        </div>

        {/* Right Side - Product Details */}
        <div className="product-details">
            <h2>PRODUCT DETAILS</h2>
            <p><span className="label">Product ID:</span> 102398123</p>
            <p><span className="label">Brand:</span> ItemBrandName</p>
            <p><span className="label">Product Name:</span> ItemName</p>
            <p><span className="label">Category:</span> ItemCategory</p>
            <p><span className="label">Price:</span> 199.99 Php</p>
            <p><span className="label">Location:</span> Talavera</p>
            <p><span className="label">SKU:</span> 12312318563445</p>
        </div>

        {/* Close Button */}
        <button className="closebtn" onClick={onClose}>×</button>
    </div>
</div>

  )
}


export default Modal1