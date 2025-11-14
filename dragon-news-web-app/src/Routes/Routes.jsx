import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/Layouts/HomeLayout";
import ErrorPage from "../components/ErrorPage";
import CategoryNews from "../components/Layouts/NewsBodyLayout/CategoryNews";
import Authentication from "../components/Layouts/AuthLayout/Authentication";
import Login from "../components/Layouts/AuthLayout/Login";
import Register from "../components/Layouts/AuthLayout/Register";
import Home from "../components/Home";
import Newdetails from "../components/Layouts/NewsBodyLayout/Newdetails";
import PrivateRoute from "../components/Layouts/NewsBodyLayout/PrivateRoute";

const router = createBrowserRouter([
    {
        path : '/',
        Component : HomeLayout,
        children:[
            {
                index:true,
                loader : ()=>fetch('/news.json'),
                Component: Home
            },
            {
                path: 'categorynews/:id',
                loader : ()=>fetch("/news.json"),
                Component : CategoryNews
            }
        ]
    },
    {
        path : '/newsdetails/:id',
        loader : ()=>fetch('/news.json'),
        element : <PrivateRoute>
            <Newdetails></Newdetails>
        </PrivateRoute>
    },
    {
        path : '/auth',
        Component : Authentication,
        children : [
            {
                index:true,
                Component : Login
            },
            {
                path : 'login',
                Component : Login
            },
            {
                path : 'register',
                Component : Register
            }
        ]
    },
    {
        path : '*',
        Component : ErrorPage
    }
])

export default router;