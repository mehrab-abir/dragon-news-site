import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/Layouts/HomeLayout";
import NewsBody from "../components/Layouts/NewsBody";
import CategoryNews from "../components/CategoryNews";
import AuthLayout from "../components/Layouts/AuthLayout";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path : '/',
        Component : HomeLayout,
        children: [
            {
                index: true,
                Component : NewsBody
            },
            {
                path : '/category/:id',
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