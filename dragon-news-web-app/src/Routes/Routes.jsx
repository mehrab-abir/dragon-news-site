import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/Layouts/HomeLayout";
import ErrorPage from "../components/ErrorPage";
import CategoryNews from "../components/Layouts/NewsBodyLayout/CategoryNews";
import Authentication from "../components/Layouts/AuthLayout/Authentication";
import Login from "../components/Layouts/AuthLayout/Login";
import Register from "../components/Layouts/AuthLayout/Register";

const router = createBrowserRouter([
    {
        path : '/',
        Component : HomeLayout,
        children:[
            {
                index: true,
                Component: HomeLayout
            },
            {
                path: 'categorynews/:id',
                loader : ()=>fetch("/news.json"),
                Component : CategoryNews
            }
        ]
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