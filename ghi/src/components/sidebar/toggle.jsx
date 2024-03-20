import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'
import { Hint } from './hint'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
                    <span className="text-lg font-semibold">My Fridge</span>
                    <Hint label={collapsed ? 'Expand' : 'Collapse'}>
                        {collapsed ? (
                            <CircleChevronRight size="24" className="mr-2" />
                        ) : (
                            <CircleChevronLeft size="24" className="mr-2" />
                        )}
                        {/* {collapsed ? 'Expand' : 'Collapse'} */}
                    </Hint>
                </button>
                <nav
                    className={`bg-gray-600 text-gray flex-grow ${
                        collapsed ? 'hidden' : 'block'
                    }`}
                >
                    <ul className="p-4">
                        <li>
                            <Link to={'/grains'}>Grains</Link>
                        </li>
                        <li>
                            <Link to={'/beverages'}>Beverages</Link>
                        </li>
                        <li>
                            <Link to={'/proteins'}>Proteins</Link>
                        </li>

                    </ul>
                </nav>
                <div className="flex bg-gray-600">
                </div>
            </div>
        </div>
    )
}
