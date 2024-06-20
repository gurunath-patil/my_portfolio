import React, { Fragment } from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./app";
import ContactPage from "./contactPage";

const route = createBrowserRouter([
    {
        path: "my_portfolio",
        element: <App />
    },
    {
        path: "contactform",
        element: <ContactPage />
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={route} />
    </>

)