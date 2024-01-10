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
import ErrorPage from "../page/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ManageFoodsRowUpdate from "../page/ManageFoods/ManageFoodsRowUpdate";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('http://localhost:5000/foods'),
            },
            {
                path: '/food/:id',
                element: <FoodCardDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`),
            },
            {
                path: '/availableFoods',
                element: <AvailableFoods />,
                loader: () => fetch('http://localhost:5000/foods'),
            },
            {
                path: '/addFood',
                element: <PrivateRoute><AddFood /></PrivateRoute>
            },
            {
                path: '/manageFood',
                element: <ManageFoods />,
                loader: () => fetch('http://localhost:5000/foods')
            },
            {
                path: '/managefoodupdate/:id',
                element: <ManageFoodsRowUpdate />,
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
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