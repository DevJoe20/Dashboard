import React from 'react'
import widget from '../assets/widget.png'

const Modal = ({isOpen, onClose}) => {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Add Product</h1>

        <div className="widget">
          <div className="widget-text">
            <h3>Widget</h3>
          </div>
          <div className="widget-icon">
            <img src={widget} alt="widget" />
          </div>
        </div>

        <div className="form">
          <div className="right-form">
            <div className="input-group">
              <label>Brand</label>
              <input type="text" placeholder="Brand Name" />
            </div>
            <div className="input-group">
              <label>Product Name</label>
              <input type="text" placeholder="Product Name" />
            </div>
            <div className="input-group">
              <label>Stock Keeping Unit (SKU)</label>
              <input type="text" placeholder="SKU" />
            </div>
          </div>

          <div className="left-form">
            <div className="input-group">
              <label>Category <span>*</span></label>
              <input type="text" placeholder="Category" />
            </div>
            <div className="input-group">
              <label>Price</label>
              <input type="text" placeholder="0.00" />
            </div>
            <div className="input-group">
              <label>Location</label>
              <input type="text" placeholder="Input" />
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="discard-btn">Discard</button>
          <button className="save-btn">Save</button>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal