//@ts-check
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  store  from './app/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Beverages from './pages/Beverages.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'signUp', element: <SignUp /> },
            { path: 'login', element: <Login /> },
            { path: 'beverages', element: <Beverages /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
