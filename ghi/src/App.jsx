import { useState, useEffect } from 'react';
import Error from './pages/Error';
import Construct from './Construct';
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './app/store'; // Import your Redux store

// All your environment variables in vite are in this object
console.table(import.meta.env);

// When using environment variables, you should do a check to see if
// they are defined or not and throw an appropriate error message
const API_HOST = import.meta.env.VITE_API_HOST;

/**
 * This is an example of using JSDOC to define types for your component
 * @typedef {{module: number, week: number, day: number, min: number, hour: number}} LaunchInfo
 * @typedef {{launch_details: LaunchInfo, message?: string}} LaunchData
 *
 * @returns {React.ReactNode}
 */
function App() {
    // Replace this App component with your own.
    /** @type {[LaunchInfo | undefined, (info: LaunchInfo) => void]} */
    const [launchInfo, setLaunchInfo] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                let url = `${API_HOST}/api/launch-details`;
                console.log('fastapi url: ', url);
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch launch details');
                }
                /** @type {LaunchData} */
                let data = await response.json();

                if (!data.launch_details) {
                    console.log('drat! no launch data');
                    setError('No launch data');
                    return;
                }
                console.log('got launch data!');
                setLaunchInfo(data.launch_details);
            } catch (error) {
                console.log('drat! something happened');
                setError(error.message);
            }
        }
        getData();
    }, []);

    if (error) {
        return <Error message={error} />;
    }

    return (
        <Provider store={store}>
            <div>
                <Nav />
                <Construct launchInfo={launchInfo} />
                <Outlet />
            </div>
        </Provider>
    );
}
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
