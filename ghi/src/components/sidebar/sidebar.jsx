// Sidebar.js
import React, { useState } from 'react'

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleSidebar = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div
            className={`h-screen bg-gray-400 ${
                collapsed ? 'w-16' : 'w-64'
            } transition-all`}
        >
            {/* Your sidebar content goes here */}
            <button onClick={toggleSidebar}>Toggle Sidebar</button>
        </div>
    )
}

export default Sidebar
