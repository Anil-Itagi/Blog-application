import React, { useState, useEffect } from 'react';
import axios from "axios";
import './home.css'; // Import custom CSS for styling

const apiUrl = process.env.REACT_APP_API_KEY;

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch blog posts from the backend
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/getblogs`);  // Your backend URL here
                setPosts(response.data); // Assuming the response contains an array of blog posts
            } catch (err) {
                setError("Error fetching blogs");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []); // Empty dependency array, so it runs only once after the first render

    // Default image if the provided URL is invalid
    const defaultImage = 'https://via.placeholder.com/150'; // Replace with your default image URL

    // Function to check if the URL is valid
    const isValidImage = (url) => {
        const img = new Image();
        img.onload = () => true;
        img.onerror = () => false;
        img.src = url;
        return img.complete;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mt-4">
            <h2>All Posts</h2>
            <div className="row">
                {posts.map((post) => (
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
        </div>
    );
}

export default Home;
