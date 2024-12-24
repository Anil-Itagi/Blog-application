import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_KEY;
const MyBlogs = () => {
    const [blogs, setBlogs] = useState({});
    const location = useLocation();
   

     useEffect(() => {
        const fetchUserDetails = async () => {
            try {
            const userId = Cookies.get('user'); 
            const response = await axios.get(`${apiUrl}/api/getblogs/${userId}`); 
            setBlogs(await response.data.blogs); // Set the response data
            }
            catch (err) {
                console.error("Error fetching user details:", err);
                alert("Error in fetching"+err)
            }
         };
         fetchUserDetails();
     }, [location]);
  return (
      <div>
          <h3 className="mb-4">My Blogs</h3>
 
            {blogs?.length > 0 ? (    
            <div className="row">
                {blogs.map((post) => (
                    <div key={post._id} className="col-md-4 mb-4">
                        <div className="card post-card">
                            <div className="card-header post-card-header">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="text-muted">by {post.userName} - {post.category}</p>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{post.metaDescription}</p>
                                <div className="summary-container">
                                    <p><strong>Summary:</strong></p>
                                    <p>{post.summary}</p>
                                </div>
                                <p><strong>Author:</strong> {post.author}</p>
                                <p><strong>Tags:</strong> {post.tags}</p>
                                <p><strong>Attachments:</strong></p>
                                {/* Display the image or the default image */}
                                <img
                                    src={post.attachments }
                                    alt="attachment"
                                    className="img-fluid" // Make image responsive
                                    style={{ maxHeight: '200px', objectFit: 'cover' }}
                                />
                                <p><small>{new Date(post.currentDate).toLocaleString()}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            ) : (
                <p className="text-muted">You haven't written any blogs yet.</p>
            )}</div>
  )
}

export default MyBlogs