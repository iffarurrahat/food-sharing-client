import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-spinner loading-lg flex mx-auto items-center h-screen"></span>
    }

    if (user) {
        return children;
    }
    // return <Navigate to='/login'></Navigate>
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;