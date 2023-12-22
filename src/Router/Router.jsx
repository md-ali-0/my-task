import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard/Dashboard';
import MainLayout from '../Layout/Main/MainLayout';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import DashHome from '../Pages/Dashboard/Home/DashHome';
import Home from '../Pages/Home/Home';

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
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: '/dashboard',
                element: <DashHome/>
            }
        ]
    }
])

export default Router;