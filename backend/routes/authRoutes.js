const express = require("express");
const { signup } = require("../controllers/authController");
const router = express.Router();

// Signup Route
router.post("/signup", signup);
//login re
router.post("/login", login);

module.exports = router;