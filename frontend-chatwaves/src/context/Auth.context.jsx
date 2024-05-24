import { createContext, useContext, useState } from "react";
import { createUser } from "../Api/Register/CreateUser";




export const AuthContext = createContext()

// Hook que devuelve el signup user y otros, sin tener que exportar todo
export const useAuth = () =>{
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useauth must be used within an AuthProvider")     
    }

    return context
}

export const AuthProvider = ({children}) =>{

    // Guardar el estado del usuario para llamarlo donde se necesite
    const [user, setUser] = useState(null);
    // Saber si esta Autenticado
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signup = async (user) =>{
        try {
            const data = await createUser(user);
            //console.log(data)
            setUser(data);
            setIsAuthenticated(true);
            
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
        }
       
    }

    return(
        <AuthContext.Provider value={{signup, user, isAuthenticated}}>
            {children}
        </AuthContext.Provider>

    )
}