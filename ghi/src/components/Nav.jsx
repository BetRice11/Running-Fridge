import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const Nav = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const dropdownVariants = {
        hidden: { opacity: 0, y: -20, display: 'none' },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 }, display: 'block' },
    };

    return (
        <nav className="bg-blue-200 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/"
                            className="flex items-center py-3 px-2 text-gray-700 hover:text-gray-900"
                        >
                            <img
                                src="/logo.png"
                                alt="Logo"
                                className="h-12 w-auto mr-2"
                            />
                            <span className="font-bold"></span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <motion.input
                            whileFocus={{ scale: 1.05 }}
                            onFocus={() => setIsDropdownVisible(false)}
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-full max-w-xs"
                        />
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
                                className="absolute right-0 mt-2 p-2 shadow bg-blue-100 rounded-box w-52"
                                initial="hidden"
                                animate={
                                    isDropdownVisible ? 'visible' : 'hidden'
                                }
                                variants={dropdownVariants}
                            >
                                <li>
                                    <a className="justify-between text-gray-700 hover:bg-blue-300">

                                        <Link
                                            to={'/profile'}
                                            className="text-gray-700 hover:bg-blue-300"
                                        >
                                            Profile
                                        </Link>
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to={'/'}
                                        className="text-gray-700 hover:bg-blue-300"
                                    >
                                        Homepage
                                    </Link>
                                </li>
                                <li>
                                    <NavLink
                                        to={'/signup'}
                                        className="text-gray-700 hover:bg-blue-300"
                                    >
                                        Sign Up
                                    </NavLink>
                                </li>
                                <li>
                                    <Link
                                        to={'/login'}
                                        className="text-gray-700 hover:bg-blue-300"
                                    >
                                        Login
                                    </Link>
                                </li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Nav;
