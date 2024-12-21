const express = require("express");
const { signup, login } = require("../controllers/authController");
const { createBlog } = require("../controllers/blogController");
const { getSummary } = require("../controllers/getSummary");
const { getAllblogs } = require("../controllers/getallblogs");
const router = express.Router();

// Signup Route
router.post("/signup", signup);
//login re
router.post("/login", login);
router.post("/createBlog", createBlog);
router.post("/generateSummary", getSummary);
router.get('/getblogs', getAllblogs);
module.exports = router;