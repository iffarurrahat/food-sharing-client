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


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('http://localhost:5000/foods'),
            },
            {
                path: '/food/:id',
                element: <FoodCardDetails />,
                loader: () => fetch('http://localhost:5000/foods'),
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods />,
                loader: () => fetch('http://localhost:5000/foods'),
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