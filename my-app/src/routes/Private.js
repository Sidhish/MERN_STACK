import React from "react-router";
import { Navigate } from "react-router";

function PrivateRoute(props){
    const user = JSON.parse(localStorage.getItem("loggedInUser"))||[];
    const isAuthenticated = user.length;
   
    return isAuthenticated ? props.children : <Navigate to={"/login"} /> 
}
export default PrivateRoute;