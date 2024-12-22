const Blog = require("../models/blog");

// Create Blog
exports.createBlog = async(req, res) => {
    const { userId, userName, title, category, metaDescription, author, tags, summary, attachments } = req.body;

    try {
        const newBlog = new Blog({
            userId,
            userName,
            title,
            category,
            metaDescription,
            author,
            tags,
            attachments,
            summary,
        });

        await newBlog.save();

        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        console.log("end blog" + error);

        res.status(500).json({ message: "Error creating blog", error: error.message });
    }
};