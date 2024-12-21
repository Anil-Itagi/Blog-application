const express = require("express");
const cors = require("cors");
const connectDB = require("./db/conn");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json()); // Use express.json() instead of bodyParser.json()

// MongoDB Connection

connectDB();

// Middleware
app.use(bodyParser.json());
app.use("/api", authRoutes);

app.get('/', (req, res) => {
    res.send('Hello, server! how are you');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});