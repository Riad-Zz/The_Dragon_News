import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home";
import HomeNews from "../Pages/Home/HomeNews";
import CategoryNews from "../Components/CategoryNews/CategoryNews";
import Auth from "../Layout/Auth";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Details from "../Pages/Details/Details";
import PrivateRoutes from "../Provider/PrivateRoutes";
import Loader from "../Components/Loader/Loader";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home,
        loader: () => fetch('/news.json'),
        children: [
            {
                index: true,
                Component: HomeNews,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement : <Loader></Loader>
            },
            {
                path: 'category/:id',
                Component: CategoryNews,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement :<Loader></Loader>
            }
        ]
    },
    {
        path: '/auth',
        Component: Auth,
        children: [
            { path: '/auth/login', Component: Login },
            { path: '/auth/register', Component: Register },
        ]
    },
    {
        path: '/details/:id',
        element: <PrivateRoutes>
            <Details></Details>
        </PrivateRoutes>,
        loader: () => fetch('/news.json'),
    }
])