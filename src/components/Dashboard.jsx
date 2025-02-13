import React from 'react'
import { useState } from 'react'
import bell from '../assets/bell.png'
import man from '../assets/mannn.png'
// import store from '../assets/store.png'
import store from '../assets/store.png'
import category from '../assets/category.png'
import plus from '../assets/+.png'
import shirt from '../assets/shirt.png'
import jean from '../assets/jean.png'
import Hoodie from '../assets/Hoodie.jpeg'
import Sneakers from '../assets/Sneakers.jpeg'
import DenimJeans from '../assets/Denim Jeans.jpeg'
import Cap from '../assets/Cap.jpeg'
import Backpack from '../assets/Backpack.jpeg'
import { Pencil, Trash } from "lucide-react";
import Modal from "./Modal";


const Dashboard = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>

    <div className="dashboard">
      <div className="dash-header">
        <img src={bell} alt="Notifications" />
        <img src={man} alt="User Profile" />
      </div>

      <div className="products">
        <div className="product-nav">
          <div className="product-right">
            <div className="product-text">
              <h2>Products</h2>
            </div>
            <div className="product-input">
              <input type="text" placeholder='Search......' />
            </div>
          </div>

          <div className="product-left">
            <div className="brands">
              <p><img src={store} alt="Brands" /> Brand</p>
            </div>

            <div className="category">
              <p><img src={category} alt="Category" /> Category</p>
            </div>

            <div className="product" onClick={() => setIsModalOpen(true)}>
              <p><img src={plus} alt="" /> Product</p>
            </div>
          </div>
        </div>

        {/* Product Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>SKU</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src={shirt} alt="" /> 101</td>
                <td>102398123</td>
                <td>CTee</td>
                <td>10</td>
                <td>199.99 Php</td>
                <td>Talavera</td>
                <td className="icon-container">
                   <Pencil className="icon edit-icon" />
                   <Trash className="icon delete-icon" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><img src={jean} alt="" /> 102</td>
                <td>120398123</td>
                <td>Eupormat</td>
                <td>25</td>
                <td>259.99 Php</td>
                <td>Cabanatuan</td>
                <td className="icon-container">
                   <Pencil className="icon edit-icon" />
                   <Trash className="icon delete-icon" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><img src={Hoodie} alt="" /> 103</td>
                <td>20394812</td>
                <td>Hoodie</td>
                <td>15</td>
                <td>299.99 Php</td>
                <td>Manila</td>
                <td className="icon-container">
                   <Pencil className="icon edit-icon" />
                   <Trash className="icon delete-icon" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><img src={Sneakers} alt="" /> 104</td>
                <td>39810234</td>
                <td>Sneakers</td>
                <td>20</td>
                <td>799.99 Php</td>
                <td>Quezon City</td>
                <td className="icon-container">
                   <Pencil className="icon edit-icon" />
                   <Trash className="icon delete-icon" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><img src={DenimJeans} alt="" /> 105</td>
                <td>12039481</td>
                <td>Sneakers</td>
                <td>12</td>
                <td>499.99 Php</td>
                <td>Makati</td>
                <td className="icon-container">
                   <Pencil className="icon edit-icon" />
                   <Trash className="icon delete-icon" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><img src={Cap} alt="" /> 106</td>
                <td>98401238</td>
                <td>Cap</td>
                <td>30</td>
                <td>149.99 Php</td>
                <td>Pampanga</td>
                <td className="icon-container">
                   <Pencil className="icon edit-icon" />
                   <Trash className="icon delete-icon" />
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td><img src={Backpack} alt="" /> 107</td>
                <td>34019283</td>
                <td>Backpack</td>
                <td>18</td>
                <td>1599.99 Php</td>
                <td>Baguio</td>
                <td className="icon-container">
                   <Pencil className="icon edit-icon" />
                   <Trash className="icon delete-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>

    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Dashboard