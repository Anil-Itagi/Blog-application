const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User", // Assuming you have a User model
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    currentDate: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: false,
    },
    metaDescription: {
        type: String,
        required: false,
    },
    author: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: false,
    },
    attachments: {
        type: String, // URL or file path to the uploaded image
    },

    summary: {
        type: String,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);