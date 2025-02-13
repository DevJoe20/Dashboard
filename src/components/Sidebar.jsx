import React from 'react'
import products from '../assets/products.png'
import brand from '../assets/store.png'
import category from '../assets/category.png'
import invoice from '../assets/invoice-dollar.png'
import suppliers from '../assets/suppliers.png'

const Sidebar = () => {
  return (
    <>
    {/* sidebar */}
    <div className="sidebar">
        <div className="sidebar-logo">
            <h2>Logo</h2>
        </div>
        <div className="sidebar-link">
            <ul>
                <li> <img src={products} alt="" /> <span>Products</span></li>
                <li> <img src={brand} alt="" /> <span>Brands</span></li>
                <li> <img src={category} alt="" /> <span>Categories</span></li>
                <li> <img src={invoice} alt="" /> <span>Invoice</span></li>
                <li> <img src={suppliers} alt="" /> <span>Suppliers</span></li>
            </ul>
        </div>
    </div>
    {/* end of side bar */}
    </>
  )
}

export default Sidebar