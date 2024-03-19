import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import { AuthProvider } from '@galvanize-inc/jwtdown-for-react'




    const App = () => (
        <AuthProvider>
        <div className="container">
            <Nav />
            <div className="mt-5">
                <Outlet />
            </div>
        </div>
        </AuthProvider>
    )


export default App
