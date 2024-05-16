import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { App } from "../App";
import { Register } from "../Pages/Register/Register";
import { LoginForm } from "../Pages/Login/LoginForm";



export const getRoutes = () => createBrowserRouter([
    
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [

            { path: "/register", element: <Register /> },
            { path: "/login", element: <LoginForm/> },
 
        ]
    }
]);