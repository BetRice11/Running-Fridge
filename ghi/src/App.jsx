import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'

const App = () => {
    return (
        <div>
            <Nav/>

            <Outlet />
            {/* footer */}
        </div>
    )
}

export default App
