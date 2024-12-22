const User = require('../models/user'); // Import your User model
const Blog = require('../models/blog');
// Controller to get user details by ID
const getUserById = async(req, res) => {
    const { userId } = req.params; // Extract userId from route params
    const _id = userId;
    try {
        const user = await User.findById(
            _id); // Fetch user from database
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }


        res.status(200).json({
            user,
        }); // Send user data as response
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const getBlogsById = async(req, res) => {
    const { userId } = req.params; // Extract userId from route params

    try {
        const blogs = await Blog.find({ userId });

        if (!blogs) {
            return res.status(404).json({ message: "Blogs are not found" });
        }

        res.status(200).json({
            blogs
        });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getUserById, getBlogsById };