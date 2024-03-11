import { Link, NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="flex-1">
                    <img src="/logo.png" alt="Logo" height="32" width="150" />
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                        />
                        <div></div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <div className="skeleton w-32 h-32"></div>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <NavLink to={'/signup'}>Sign Up</NavLink>
                            </li>
                            <li>
                                <Link to={'/grains'}>Grains</Link>
                            </li>
                            <li>
                                <Link to={'/'}>Homepage</Link>
                            </li>
                            <li>
                                <Link to={'/login'}>Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        // <ul>
        //     <li>
        //         <Link to={'/'}>Homepage</Link>
        //     </li>
        //     <li>
        //         <NavLink to={'/about'}>About</NavLink>
        //     </li>
        // </ul>
    )
}

export default Nav
