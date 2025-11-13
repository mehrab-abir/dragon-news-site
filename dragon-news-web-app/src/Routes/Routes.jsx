import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/Layouts/HomeLayout";
import AuthLayout from "../components/Layouts/AuthLayout";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path : '/',
        Component : HomeLayout
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