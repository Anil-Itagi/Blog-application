const User = require("../models/user");
const bcrypt = require("bcryptjs");
// Signup Controller
exports.signup = async(req, res) => {
    try {
        const { email, username, password } = req.body;

        // Check if the email already exists
        // const existingUser = await User.findOne({ email });
        // if (existingUser) {
        //     return res.status(400).json({ error: "Email already exists" });
        // }

        // Create a new user
        const newUser = new User({ email, username, password });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
};

exports.login = async(req, res) => {
    const { email, password } = req.body;

    // Validate request
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid password." });
        }

        res.status(200).json({ message: "Login successful", data: user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Server error. Please try again later." });
    }
};