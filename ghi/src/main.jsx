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
import BeverageList from './pages/BeverageList.jsx'
import Grains from './pages/Grains.jsx'
import DairiesList from './pages/DairiesList.jsx'
import Dairies from './pages/Dairies.jsx'
import Proteins from './pages/ProteinDetail.jsx'
import ProteinList from './pages/ProteinList.jsx'
import Produce from './pages/ProduceDetail.jsx'
import ProduceList from './pages/ProduceList.jsx'
import UpdateBeverage from './pages/BeverageUpdate.jsx'
import BeverageForm from './pages/CreateBeverage.jsx'
import DairyForm from './pages/CreateDairy.jsx'
import UpdateDairy from './pages/DairyUpdate.jsx'
import Profile from './pages/Profile.jsx'
import UpdateGrain from './pages/GrainUpdate.jsx'
import GrainForm from './pages/CreateGrain.jsx'
import UpdateProduce from './pages/ProduceUpdate.jsx'
import ProduceForm from './pages/CreateProduce.jsx'
import UpdateProtein from './pages/ProteinUpdate.jsx'
import ProteinForm from './pages/CreateProtein.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'profile', element: <Profile /> },
            { path: 'signUp', element: <SignUp /> },
            { path: 'login', element: <Login /> },
            { path: 'beverages/:item_id', element: <Beverages /> },
            { path: 'beverages', element: <BeverageList /> },
            { path: 'grains', element: <GrainList /> },
            { path: 'grains/:item_id', element: <Grains /> },
            { path: 'beverages/:item_id/update', element: <UpdateBeverage /> },
            { path: 'dairies/:item_id', element: <Dairies /> },
            { path: 'dairies', element: <DairiesList /> },
            { path: 'dairies/create', element: <DairyForm /> },
            { path: 'dairies/:item_id/update', element: <UpdateDairy /> },
            { path: 'grains/:item_id/update', element: <UpdateGrain /> },
            { path: 'grains/create', element: <GrainForm /> },
            { path: 'proteins', element: <ProteinList /> },
            { path: 'proteins/:item_id', element: <Proteins /> },
            { path: 'proteins/:item_id/update', element: <UpdateProtein /> },
            { path: 'proteins/create', element: <ProteinForm /> },
            { path: 'produce', element: <ProduceList /> },
            { path: 'produce/:item_id', element: <Produce /> },
            { path: 'produce/:item_id/update', element: <UpdateProduce /> },
            { path: 'produce/create', element: <ProduceForm /> },
            { path: 'beverages/create', element: <BeverageForm /> },
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
