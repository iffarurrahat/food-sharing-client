import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import AvailableFoods from "../page/AvailableFoods/AvailableFoods";
import AddFood from "../page/AddFood/AddFood";
import FoodRequest from "../page/FoodRequest/FoodRequest";
import ManageFoods from "../page/ManageFoods/ManageFoods";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import FoodCardDetails from "../components/HomeComponents/FoodCardDetails";
import PrivateRoute from "./PrivateRoute";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('https://food-sharing-94c7e.web.app/foods'),
            },
            {
                path: '/food/:id',
                element: <PrivateRoute><FoodCardDetails /></PrivateRoute>,
                loader: () => fetch('https://food-sharing-94c7e.web.app/foods'),
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods />,
                loader: () => fetch('https://food-sharing-94c7e.web.app/foods'),
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFood /></PrivateRoute>
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