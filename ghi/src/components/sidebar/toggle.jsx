import { CircleChevronLeft } from 'lucide-react'
import { Hint } from './hint'
import { useState } from 'react'

export const Toggle = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
        console.log("collapsed", collapsed)
    }

    const label = collapsed ? 'Expand' : 'Collapse'

    return (
        <div
            className={`flex h-screen ${
                collapsed ? 'w-16' : 'w-64'
            } transition-all duration-300 ease-in-out`}
        >
            <div className="flex flex-col w-full">
                <button
                    onClick={toggleCollapse}
                    className="p-4 w-full bg-gray-700 text-gray"
                >
                    {collapsed ? 'Expand' : 'Collapse'}
                </button>
                <div className="flex-1 bg-gray-500">
                </div>
            </div>
        </div>
    )
}
