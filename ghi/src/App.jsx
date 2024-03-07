import Nav from './components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'

console.table(import.meta.env)

const App = () => {
    return (
        <div>
            <Nav />

            <Outlet />
        </div>
    )
}

export default App;
