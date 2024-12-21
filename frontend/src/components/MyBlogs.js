import React, { useState } from "react";


const MyBlogs = () => {
    // Mock user data
    const user = {
        name: "John Doe",
        photo: "https://via.placeholder.com/100",
        quote: "The secret to getting ahead is getting started.",
    };

    // Mock blog list
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "My First Blog Post",
            description: "A quick introduction to my blogging journey.",
            date: "2024-12-21",
        },
        {
            id: 2,
            title: "React Tips and Tricks",
            description: "Some useful tips for React developers.",
            date: "2024-12-18",
        },
        {
            id: 3,
            title: "Why I Love Coding",
            description: "Sharing my passion for software development.",
            date: "2024-12-15",
        },
    ]);

    return (
        <div className="container mt-5">
            {/* User Info */}
            <div className="text-center mb-4">
                <img
                    src={user.photo}
                    alt={`${user.name}'s profile`}
                    className="rounded-circle mb-3"
                    style={{ width: "100px", height: "100px" }}
                />
                <h2>{user.name}</h2>
                <p className="text-muted fst-italic">"{user.quote}"</p>
                <button className="btn btn-primary mt-3">Create New Blog</button>
            </div>

            {/* List of Blogs */}
            <h3 className="mb-4">My Blogs</h3>
            {blogs.length > 0 ? (
                <div className="list-group">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="list-group-item list-group-item-action mb-3"
                        >
                            <h5>{blog.title}</h5>
                            <p>{blog.description}</p>
                            <small className="text-muted">Published on: {blog.date}</small>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted">You haven't written any blogs yet.</p>
            )}
        </div>
    );
};

export default MyBlogs;
