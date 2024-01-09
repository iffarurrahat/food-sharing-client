import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children;
    }
    // return <Navigate to='/login'></Navigate>
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;


PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};