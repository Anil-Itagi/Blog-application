import React, { useState ,useEffect} from "react";
import { Link ,useLocation} from "react-router-dom";
// import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";  // Import Axios
import MyBlogs from "./MyBlogs";
import CreateBlog from "./CreateBlog";
const apiUrl = process.env.REACT_APP_API_KEY;
const User = () => {
    // Mock user data

    const [isCreated, setIsCreated] = useState(true);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

     const location = useLocation();
   

     useEffect(() => {
        const fetchUserDetails = async () => {
            try {
            const userId = Cookies.get('user');
            const response = await axios.get(`${apiUrl}/api/getuser/${userId}`); // Send userId as a route parameter
            setUserData(response.data.user); // Set the response data
            setError(null); // Clear any previous errors
        } catch (err) {
            console.error("Error fetching user details:", err);
            setError("Failed to fetch user details. Please try again.");
            setUserData(null); // Clear user data on error
        }
         };
         fetchUserDetails();
     }, [location]);

    

    function handleClick() {
        setIsCreated(!isCreated)
    }

    return (
        <div className="container mt-5">
            {/* User Info */}
            { error}
            <div className="text-center mb-4">
                <img
                    src={"https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0&h=180"}
                    alt={`${userData?.username}'s profile`}
                    className="rounded-circle mb-3"
                    style={{ width: "100px", height: "100px" }}
                />
                <h2>{userData?.username}</h2>
              
                <Link className="btn btn-primary mt-3" onClick={handleClick} >{isCreated ? "Create New Blog  -->":"Go to My blogs -->" }</Link>
            </div>
            {isCreated ? <MyBlogs  /> : <CreateBlog setIsCreated={ setIsCreated} userName={userData?.username} />}
            
            
        </div>
    );
};

export default User;
