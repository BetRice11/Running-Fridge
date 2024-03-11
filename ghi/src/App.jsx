import Nav from './components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Nav />

            <Outlet />
        </div>
    )
}

export default App;
