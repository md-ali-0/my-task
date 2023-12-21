import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/Main/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default Router;