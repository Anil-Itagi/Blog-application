import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
const DeletePost = ({ match }) => {
    const history = useHistory();

    const handleDelete = async () => {
        try {
             const userId = Cookies.get('user');
            await axios.delete(`http://localhost:5000/api/posts/${userId}`);
            history.push('/'); // Redirect to home or another page
        } catch (err) {
            console.error("Error deleting post", err);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Are you sure you want to delete this post?</h2>
            <button onClick={handleDelete} className="btn btn-danger">Yes, Delete</button>
            <button onClick={() => history.goBack()} className="btn btn-secondary">Cancel</button>
        </div>
    );
};

export default DeletePost;
