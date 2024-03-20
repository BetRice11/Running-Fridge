import Nav from './components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/sidebar'
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react"
import { useDispatch } from 'react-redux';
import { setUser } from './app/userSlice';
import Profile from './pages/Profile';

const App = () => {
    const dispatch = useDispatch();

     React.useEffect(() => {
    // Fetch user data from API
    const userData = {
      name: 'John Doe',
      email: 'john@example.com',
      // Add more user data as needed
    };
    // Dispatch action to update user state
    dispatch(setUser(userData));
  }, [dispatch]);
    return (
        <AuthProvider>
        <div>
            <Nav />
            <div className="flex">
                <div className="flex-1">
                    <Outlet />
                </div>
                <Sidebar />
            </div>
        </div>
        </AuthProvider>
    )
}

export default App
