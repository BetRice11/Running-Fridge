
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth >= 960) {
      clearTimeout(delayHandler);
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth >= 960) {
      const handler = setTimeout(() => {
        setDropdown(false);
      }, 200);
      setDelayHandler(handler);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(delayHandler);
    };
  }, [delayHandler]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src = {logo} alt="Logo" style={{width: "250px", height: "50px"}}/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {token && (
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/closet"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                MyCloset <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
          )}
          {token && (
            <li className="nav-item">
              <Link
                to="/planner"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Planner
              </Link>
            </li>
          )}
          {!token && (
            <li>
              <Link
                to="/signup"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <SignupButton />
              </Link>
            </li>
          )}
          {!token && (
            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <LoginButton />
              </Link>
            </li>
          )}
          {token && (
            <li>
              <Link to="/" className="nav-links-mobile" onClick={logout}>
                <LogoutButton />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
