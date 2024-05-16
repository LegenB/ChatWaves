import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../ErrorPage";
import { App } from "../App";
import { Register } from "../Pages/Register/Register";
import { LoginForm } from "../Pages/Login/LoginForm";
import { Home } from "../Pages/Home/Home";



export const getRoutes = () => createBrowserRouter([
    
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [

            { path: "/", element: <Home /> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <LoginForm/> },
 
        ]
    }
]);