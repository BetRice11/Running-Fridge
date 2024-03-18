import { Link, NavLink } from "react-router-dom";
import { useGetTokenQuery, useLogoutMutation } from "../app/apiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Nav = () => {
    const navigate = useNavigate();
    const { data: account } = useGetTokenQuery();
    const [logout, logoutResponse] = useLogoutMutation();

    useEffect(() => {
        if (logoutResponse.data) navigate('/');
    }, [logoutResponse])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">Beverages</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
                        </li>
                        {!account && <li className="nav-item">
                            <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
                        </li>}
                        {!account && <li className="nav-item">
                            <NavLink to={'/signup'} className={'nav-link'}>Sign Up</NavLink>
                        </li>}
                        {!account && <li className="nav-item">
                            <NavLink to={'/about'} className={'nav-link'}>About</NavLink>
                        </li>}
                        {!account && <li className="nav-item">
                            <NavLink to={'/beverages'} className={'nav-link'}>Beverages</NavLink>
                        </li>}
                            <li>
                                <Link to={'/signUp'}>Sign Up</Link>
                            </li>
                            <li>
                                <Link to={'/beverages'}>Beverages</Link>
                            </li>
                        </ul>
                    </div>
                    </ul>
                    {account && <button className="btn btn-outline-danger" onClick={logout}>
                        Logout
                    </button>}
                </div>
            </div>
        </nav>
    )
}

export default Nav;

// import { Link, NavLink } from "react-router-dom";
// import { useGetTokenQuery, useLogoutMutation } from "../app/apiSlice";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { Provider } from 'react-redux';
// const Nav = () => {
//     const navigate = useNavigate();
//     const { data: account } = useGetTokenQuery();
//     const [logout, logoutResponse] = useLogoutMutation();
//     useEffect(() => {
//         if (logoutResponse.data) navigate('/');
//     }, [logoutResponse])
//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//             <div className="container-fluid">
//                 <Link to={'/'} className="navbar-brand">Pokemon</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <NavLink to={'/'} className={'nav-link'}>Home</NavLink>
//                         </li>
//                         {!account && <li className="nav-item">
//                             <NavLink to={'/login'} className={'nav-link'}>Login</NavLink>
//                         </li>}
//                         {!account && <li className="nav-item">
//                             <NavLink to={'/signup'} className={'nav-link'}>Sign Up</NavLink>
//                         </li>}
//                     </ul>
//                     {account && <button className="btn btn-outline-danger" onClick={logout}>
//                         Logout
//                     </button>}
//                 </div>
//             </div>
//         </nav>
//     )
// }
// export default Nav;
