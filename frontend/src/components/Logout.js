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
    const userConfirmed = window.confirm(
      "Are you sure you want to proceed?"
    );
    if(userConfirmed)
      handleLogout();
    return null;
};
export default Logout;
