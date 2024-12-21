const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() instead of bodyParser.json()

// MongoDB Connection
mongoose
    .connect(process.env.URL, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// POST route to handle login (save data to the database or validate)
app.post("/api/login", async(req, res) => {
    const { email, password } = req.body;
    console.log('from server');
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        // Save the user email and password to the database
        const newUser = new User({ email, password });
        await newUser.save();

        res.status(201).json({ message: "User logged in successfully", data: newUser });
    } catch (error) {
        console.log(error + " eoorrrrr");
        res.status(500).json({ error: "Failed to log in user" });
    }
});



app.get('/', (req, res) => {
    res.send('Hello, server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});