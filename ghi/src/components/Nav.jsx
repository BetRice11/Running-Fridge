import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const Nav = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false)

    const dropdownVariants = {
        hidden: { opacity: 0, y: -20, display: 'none' },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 },
            display: 'block',
        },
    }

    return (
        <nav className="bg-blue-200 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="mx-auto">
                        <Link
                            to="/"
                            className="flex items-center justify-center"
                        >
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>

                    <div className="opacity-0">
                        <motion.input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>

                    <div className="relative">
                        <motion.div
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                            onClick={() =>
                                setIsDropdownVisible(!isDropdownVisible)
                            }
                            onBlur={() => setIsDropdownVisible(false)}
                        >
                            <User size="32" className="text-gray-700" />
                        </motion.div>
                        <motion.ul
                            className="absolute right-0 mt-2 p-2 shadow menu menu-compact bg-blue-100 rounded-box w-52"
                            initial="hidden"
                            animate={isDropdownVisible ? 'visible' : 'hidden'}
                            variants={dropdownVariants}
                        >
                            <li>
                                <Link
                                    to={'/profile'}
                                    className="text-gray-700 hover:bg-blue-300 block px-4 py-2"
                                >
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/'}
                                    className="text-gray-700 hover:bg-blue-300 block px-4 py-2"
                                >
                                    Homepage
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/signup'}
                                    className="text-gray-700 hover:bg-blue-300 block px-4 py-2"
                                >
                                    Sign Up
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={'/login'}
                                    className="text-gray-700 hover:bg-blue-300 block px-4 py-2"
                                >
                                    Login
                                </Link>
                            </li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
