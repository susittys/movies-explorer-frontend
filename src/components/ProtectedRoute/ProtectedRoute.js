import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, element: Component, ...props }) {
//   return loggedIn ? <Component {...props} /> : <Navigate to="/" replace />;
    return <Component {...props} />
}
export default ProtectedRoute;