const Blog = require("../models/blog");

// Create Blog
exports.createBlog = async(req, res) => {
    const { userId, userName, title, category, metaDescription, author, tags, summary, attachments } = req.body;
    console.log("inside createblog");
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

        // Save the new blog to the database
        await newBlog.save();
        console.log("end blog");
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        console.log("end blog" + error);

        res.status(500).json({ message: "Error creating blog", error: error.message });
    }
};