import Nav from './components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/sidebar/sidebar'
import { AuthProvider } from '@galvanize-inc/jwtdown-for-react'
import { useDispatch } from 'react-redux'

const App = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        const userData = {
            name: 'John Doe',
            email: 'john@example.com',
        }
    }, [dispatch])
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
