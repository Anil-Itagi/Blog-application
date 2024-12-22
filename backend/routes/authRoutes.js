const express = require("express");
const { signup, login } = require("../controllers/authController");
const { createBlog } = require("../controllers/blogController");
const { getSummary } = require("../controllers/getSummary");
const { getAllblogs } = require("../controllers/getallblogs");
const { getUserById, getBlogsById } = require("../controllers/getUserById");
const { updatePostById, getPostById, deletePostById } = require("../controllers/blogControl");
const router = express.Router();

// Signup Route
router.post("/signup", signup);
//login re
router.post("/login", login);
router.post("/createBlog", createBlog);
router.post("/generateSummary", getSummary);
router.get('/getblogs', getAllblogs);
router.get('/getuser/:userId', getUserById);
router.get('/getblogs/:userId', getBlogsById);
router.get('/posts/:userId', getPostById);
router.put('/posts/:userId', updatePostById);
router.delete('/posts/:userId', deletePostById);

module.exports = router;