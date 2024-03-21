//@ts-check
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Beverages from './pages/BeverageDetail.jsx'
import GrainList from './pages/GrainList.jsx'
import BeverageList from './BeverageList.jsx'
import Grains from './pages/Grains.jsx'
import UpdateBeverage from './pages/BeverageUpdate.jsx'
import BeverageForm from './pages/CreateBeverage.jsx'

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
            { path: 'beverages/:item_id', element: <Beverages /> },
            { path: 'beverages', element: <BeverageList /> },
            { path: 'grains', element: <GrainList />},
            { path: 'grains/:item_id', element: <Grains />},
            { path: 'beverages/:item_id/update', element: <UpdateBeverage /> },
            { path: 'beverages/create', element: <BeverageForm />}
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
