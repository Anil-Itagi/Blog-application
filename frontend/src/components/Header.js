import { Link ,useLocation} from "react-router-dom";
// import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import "./header.css"
import { useEffect, useState } from "react";

function Header({isAuthenticated,setIsAuthenticated}) {
    const location = useLocation();
    
    useEffect(() => {
    const token = Cookies.get('token');
       setIsAuthenticated(!!token); // Sets to true if token exists, false otherwise
    }, [location]);
   
    return (
         <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="nosifer-regular navbar-brand" href="/" >Blog APP</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
             <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
              
            <li className="nav-item">
             <Link className="nav-link" to="/signup">Signup</Link>
            </li>
              {
                 isAuthenticated ?
                <li className="nav-item">
                     <Link className="nav-link" to="/logout">Logout</Link>
                  </li> 
                  : 
                  
                <li className="nav-item">
                     <Link className="nav-link" to="/login">Login</Link>
                  </li>
                        }  
                     {
                            isAuthenticated ? <li className="nav-item">
                                <Link className="nav-link" to="/blogs">My blogs</Link>
                            </li> : ""
                    }
              
          </ul>
        </div>
      </div>
    </nav>
    )
    
}
export default Header;