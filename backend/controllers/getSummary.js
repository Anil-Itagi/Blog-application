const { spawn } = require('child_process');

// Function to execute Python script and return output
const executePythonScript = (title, category, metaDescription) => {
    return new Promise((resolve) => {
        const args = [title, category, metaDescription]; // Arguments for the Python script

        const pythonProcess = spawn('python', ['./controllers/generate_summary.py'].concat(args));

        let output = '';

        pythonProcess.stdout.on('data', (data) => {
            output = data.toString();
        });


        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                // reject(new Error(`Python script exited with code ${code}`));
            } else {
                resolve(output.trim()); // Resolve with trimmed output
            }
        });
    });
};

// Main function to handle logic and get the summary
async function getSummary1(title, category, metaDescription) {
    try {
        const summary = await executePythonScript(title, category, metaDescription);
        console.log("Generated Summary:", summary);
        return summary;
    } catch (error) {
        console.error("Error generating summary:", error);
        throw error; // Rethrow the error for further handling
    }
}

exports.getSummary = async(req, res) => {
    const { title, category, metaDescription } = req.body;

    try {
        const summary = await getSummary1(title, category, metaDescription);
        if (summary) {
            console.log("Generated Summary:", summary);
            res.status(201).json({
                message: "Summary created successfully",
                summary
            });
        } else {
            console.error("Error generating summary");
            res.status(500).json({ message: "Error creating summary" });
        }
    } catch (error) {
        console.error("Error in generating summary:", error);
        res.status(500).json({ message: "Error generating summary", error: error.message });
    }
};