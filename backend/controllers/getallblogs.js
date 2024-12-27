// controllers/blogController.js
const Blog = require('../models/blog'); // Import the Blog model

// Controller to get all blogs
exports.getAllblogs = async(req, res) => {

    try {
        // Fetch all blogs from the database
        const blogs = await Blog.find().sort({ createdAt: -1 });
        // If no blogs found, return an appropriate message
        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found" });
        }

        // Return the fetched blogs as a response
        res.status(200).json(blogs);
    } catch (error) {
        // Handle errors if any occur
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "Error fetching blogs", error: error.message });
    }
};