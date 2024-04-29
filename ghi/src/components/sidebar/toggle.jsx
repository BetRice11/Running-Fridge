import { motion } from 'framer-motion'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Toggle = () => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleCollapse = () => {
        setCollapsed(!collapsed)
    }

    const sidebarVariants = {
        collapsed: { width: '4rem' },
        expanded: { width: '16rem' },
    }

    return (
        <motion.div
            animate={collapsed ? 'collapsed' : 'expanded'}
            variants={sidebarVariants}
            transition={{ duration: 0.5 }}
            className="flex h-screen transition-all ease-in-out bg-blue-50 border-r border-blue-200"
        >
            <div className="flex flex-col w-full">
                <button
                    onClick={toggleCollapse}
                    className="p-4 w-full bg-blue-700 hover:bg-blue-800 text-white flex justify-between items-center"
                >
                    <span className="text-lg font-semibold">My Fridge</span>
                    {collapsed ? (
                        <CircleChevronRight size="24" />
                    ) : (
                        <CircleChevronLeft size="24" />
                    )}
                </button>
                <motion.nav
                    initial={false}
                    animate={{
                        opacity: collapsed ? 0 : 1,
                        x: collapsed ? -100 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex-grow bg-blue-600 text-white"
                >
                    <ul className="space-y-2 p-4">
                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link
                                to={'/beverages'}
                                className="flex items-center"
                            >
                                Beverages
                            </Link>
                        </li>

                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link to={'/dairies'} className="flex items-center">
                                Dairies
                            </Link>
                        </li>

                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link to={'/grains'} className="flex items-center">
                                Grains
                            </Link>
                        </li>

                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link to={'/produce'} className="flex items-center">
                                Produce
                            </Link>
                        </li>

                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link
                                to={'/proteins'}
                                className="flex items-center"
                            >
                                Proteins
                            </Link>
                        </li>

                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link
                                to={'/beverages/create'}
                                className="flex items-center"
                            >
                                Add Beverages
                            </Link>
                        </li>

                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link
                                to={'/dairies/create'}
                                className="flex items-center"
                            >
                                Add Dairy
                            </Link>
                        </li>

                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link
                                to={'/grains/create'}
                                className="flex items-center"
                            >
                                Add Grains
                            </Link>
                        </li>

                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link
                                to={'/produce/create'}
                                className="flex items-center"
                            >
                                Add Produce
                            </Link>
                        </li>

                        <li className="hover:bg-blue-700 p-2 rounded-md transition-colors duration-200">
                            <Link
                                to={'/proteins/create'}
                                className="flex items-center"
                            >
                                Add Protein
                            </Link>
                        </li>

                    </ul>
                </motion.nav>
                <div className="flex bg-blue-700 p-4 justify-center">
                    <span className="text-white text-sm">Keep it cool!</span>
                </div>
            </div>
        </motion.div>
    )
}
