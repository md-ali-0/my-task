import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layout/Dashboard/Dashboard';
import MainLayout from '../Layout/Main/MainLayout';
import About from '../Pages/About/About';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Contact from '../Pages/Contact/Contact';
import DashHome from '../Pages/Dashboard/Home/DashHome';
import AddTask from '../Pages/Dashboard/Task/AddTask';
import Home from '../Pages/Home/Home';
import PrivateRouter from './PrivateRouter';

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
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
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
        element: <PrivateRouter><Dashboard/></PrivateRouter>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRouter><DashHome/></PrivateRouter>
            },
            {
                path:'add-task',
                element: <PrivateRouter><AddTask/></PrivateRouter>
            }
        ]
    }
])

export default Router;