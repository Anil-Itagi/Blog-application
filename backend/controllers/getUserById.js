const User = require('../models/user'); // Import your User model
const Blogs = require('../models/blog');
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
        const blogs = await Blogs.findById(_id);
        // if (!blogs) {
        //     res.status(200).json({
        //         user,
        //         message: "NO blogs posted"
        //     });
        // }
        console.log(user, blogs);
        res.status(200).json({
            user,
            blogs
        }); // Send user data as response
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getUserById };