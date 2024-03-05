import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Nav />

            <Outlet />
            {/* footer */}
        </div>
    )
}

export default App
