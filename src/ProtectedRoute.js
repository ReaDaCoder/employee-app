import React, {useContext} from "react";
import {AuthContext} from "../src/Auth";
import { Route, Redirect, Navigate } from "react-router-dom";


const ProtectedRoute = ({component: RouteComponent, ...rest}) =>{
    const {currentUser} = useContext(AuthContext);
    return(
        <></>
        // <Route
        // {...rest}
        // render={routeProps=>
        //     !! currentUser ?(
        //         <RouteComponent{...routeProps}/>
        //     ) : (
        //         <Navigate to={"/login"}/>
        //     )
        // }
        // />
    )
};

export default ProtectedRoute