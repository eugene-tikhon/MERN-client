import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";


export const ProtectedRoute = ({children}) => {
    const { user } = useAppContext();
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!user) navigate('/landing');
    },[user, navigate]);

    return children
}