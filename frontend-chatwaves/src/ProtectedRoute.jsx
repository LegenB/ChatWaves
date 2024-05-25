import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/Auth.context";



export const ProtectedRoute = () => {
    // Ver si el usuario esta logeado, si no redirigir al login
    const { isAuthenticated } = useContext(AuthContext);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}



