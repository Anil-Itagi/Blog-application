import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
const apiUrl = process.env.REACT_APP_API_KEY;
const EditPost = ({ match }) => {
    const [post, setPost] = useState({ title: '', metaDescription: '', summary: '' });
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                 const userId = Cookies.get('user');
                const response = await axios.get(`${apiUrl}/posts/${userId}`);
                setPost(response.data);
            } catch (err) {
                setError("Error fetching post");
            }
        };
        fetchPost();
    }, [match.params.id]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userId = Cookies.get('user');
            await axios.put(`${apiUrl}/posts/${userId}`, post);
            history.push('/'); // Redirect to home or another page
        } catch (err) {
            setError("Error updating post");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Edit Post</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Meta Description</label>
                    <textarea
                        name="metaDescription"
                        value={post.metaDescription}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Summary</label>
                    <textarea
                        name="summary"
                        value={post.summary}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Post</button>
            </form>
        </div>
    );
};

export default EditPost;
