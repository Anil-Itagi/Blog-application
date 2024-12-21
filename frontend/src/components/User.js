import React, { useState } from "react";
import { Link} from "react-router-dom";
import MyBlogs from "./MyBlogs";
import CreateBlog from "./CreateBlog";

const User = () => {
    // Mock user data

    const [isCreated, setIsCreated] = useState(false);
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

    function handleClick() {
        setIsCreated(!isCreated)
    }

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
                <Link className="btn btn-primary mt-3" onClick={handleClick} >{isCreated ? "Create New Blog":"My blogs" }</Link>
            </div>
          {isCreated ?    <MyBlogs blogs={blogs }/> : <CreateBlog/>}
            
            
        </div>
    );
};

export default User;
