//@ts-check
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/SignUp.jsx';
import GrainList from './pages/GrainList.jsx'
import BeverageList from './pages/BeverageList.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "login", element: <Login />},
            { path: "signup", element: <Signup />},
            { path: "grains", element: <GrainList />},
            { path: "beverages", element: <BeverageList />}
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
