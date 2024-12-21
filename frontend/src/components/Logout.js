// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
const Logout = () => {
    const navigate = useNavigate();
    
    const handleLogout = async() => {
        try {
                Cookies.remove('token');
                navigate("/api/login"); //       
            }
        catch (error) {
            console.error("Error during logout:", error.message);
            
        }
    };
    handleLogout();
    return null;
};
export default Logout;
