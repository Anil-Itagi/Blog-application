const Blog = require('../models/blog');

// Get details of a specific blog post
const getPostById = async(req, res) => {
    try {
        const post = await Blog.findById(req.params.userId);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving post", error });
    }
};

// Update a specific blog post
const updatePostById = async(req, res) => {
    try {
        const post = await Blog.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({ message: "Post updated successfully", post });
    } catch (error) {
        res.status(500).json({ message: "Error updating post", error });
    }
};

// Delete a specific blog post
const deletePostById = async(req, res) => {
    try {
        const post = await Blog.findByIdAndDelete(req.params.userIdd);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting post", error });
    }
};

module.exports = { getPostById, updatePostById, deletePostById };