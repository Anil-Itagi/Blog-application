import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';
import { BrowserRouter as Router, Routes, Route ,Outlet} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Logout from './components/Logout';
import {  useState } from 'react';
import CreateBlog from './components/CreateBlog';
import User from './components/User';
// import Cookies from 'js-cookie'



function App() {

    
   const [isAuthenticated, setIsAuthenticated] = useState(false);
    
  return (
    <Router>
      <div>
       <>
         <Header isAuthenticated={isAuthenticated } setIsAuthenticated={ setIsAuthenticated}/>
         <Outlet /> 
      </>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
          <Route  path="/blogs" element={
            isAuthenticated ? <>
                                <User />
                                <Outlet />
                              </> :
                            <></>          
            }/>
             
          <Route  path="/createBlog" element={<CreateBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       <Footer />
      </div>
    </Router>
  );
}

export default App;
