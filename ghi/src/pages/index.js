import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "app/store";
import { Provider } from "react-redux";
import App from "App";
import Home from "./Home";
import BeverageForm from "./BeverageList";
import BeverageList from "./Beverages";
import DairyForm from "./dairies_form";
import DairyList from "./dairies_list";
import GrainForm from "./grains_form";
import GrainList from "./grains_list";
import ProduceForm from "./produces_form";
import ProduceList from "./produces_list";
import ProteinForm from "./proteins_form";
import ProteinList from "./proteins_list";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/beverageform',
                element: <BeverageForm />,
            },
            {
                path: '/beveragelist',
                element: <BeverageList />
            },
            {
                path: '/dairyform',
                element: <DairyForm />
            },
            {
                path: '/dairylist',
                element: <DairyList />
            },
            {
                path: '/grainform',
                element: <GrainForm />
            },
            {
                path: '/grainlist',
                element: <GrainList />
            },
            {
                path: '/produceform',
                element: <ProduceForm />
            },
            {
                path: '/producelist',
                element: <ProduceList />
            },
            {
                path: '/proteinform',
                element: <ProteinForm />
            },
            {
                path: '/proteinlist',
                element: <ProteinList />
            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
