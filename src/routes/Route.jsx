import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import AvailableFoods from "../page/AvailableFoods/AvailableFoods";
import AddFood from "../page/AddFood/AddFood";
import FoodRequest from "../page/FoodRequest/FoodRequest";
import ManageFoods from "../page/ManageFoods/ManageFoods";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods />
            },
            {
                path: '/addFood',
                element: <AddFood />
            },
            {
                path: '/manageFood',
                element: <ManageFoods />
            },
            {
                path: '/foodRequest',
                element: <FoodRequest />
            }
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default myCreatedRoute;