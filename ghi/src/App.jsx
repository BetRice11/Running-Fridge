import Nav from './components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/sidebar'

const App = () => {
    return (
        <div>
            <Nav />
            <div className="flex">
                <div className="flex-1">
                    <Outlet />
                </div>
                <Sidebar />
            </div>
        </div>
    )
}

export default App;
