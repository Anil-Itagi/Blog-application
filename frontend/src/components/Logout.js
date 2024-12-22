// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useEffect } from "react";
const Logout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
    const handleLogout = async() => {
        try {
                Cookies.remove('token');
                navigate("/login"); //       
            }
        catch (error) {
            console.error("Error during logout:", error.message);
            
        }
    };
    console.log("confirm");
    const userConfirmed = window.confirm(
      "Are you sure you want to proceed?"
    );
    if(userConfirmed)
        handleLogout();
    else
        navigate('/')
    },[navigate])
    
    return null;
};
export default Logout;
