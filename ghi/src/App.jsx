import Nav from './components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/sidebar'

const App = () => {
    return (
        <div className='h-screen'>
            <Nav />
            <Sidebar />

            <Outlet />
        </div>
    )
}

export default App;
