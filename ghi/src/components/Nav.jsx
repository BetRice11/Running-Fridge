import { Link, NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
        </ul>
    )
}

export default Nav;
