import { useContext } from "react";
import { AuthContext } from "../contextProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,looding} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)
    if(looding){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user?.email){
        return children;
    }
    return (
       <Navigate to ='/login' state={location.pathname}  replace>

       </Navigate>
    );
};

export default PrivateRoute;