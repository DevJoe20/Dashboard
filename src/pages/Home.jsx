import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

const Home = () => {
  return (
    <>
    <div className='home-container'>
        <Sidebar />
        <Dashboard />
    </div>
    </>
  )
}

export default Home