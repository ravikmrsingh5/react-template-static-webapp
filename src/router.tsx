import { createBrowserRouter } from "react-router-dom"
import React from 'react'
import HomePage from './pages/home'
import ErrorPage from './pages/errors/error-page'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage/>
    }
]);
