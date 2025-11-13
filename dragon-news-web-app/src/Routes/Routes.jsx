import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/Layouts/HomeLayout";
import AuthLayout from "../components/Layouts/AuthLayout";
import ErrorPage from "../components/ErrorPage";
import CategoryNews from "../components/Layouts/NewsBodyLayout/CategoryNews";

const router = createBrowserRouter([
    {
        path : '/',
        Component : HomeLayout,
        children:[
            {
                path: 'categorynews/:id',
                loader : ()=>fetch("/news.json"),
                Component : CategoryNews
            }
        ]
    },
    {
        path : '/auth',
        Component : AuthLayout
    },
    {
        path : '*',
        Component : ErrorPage
    }
])

export default router;