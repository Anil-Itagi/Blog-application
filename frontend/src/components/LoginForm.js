import React, { useState } from "react";
import axios from "axios";  // Import Axios
import { useNavigate} from 'react-router-dom'
import Cookies from "js-cookie"
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //  const apiUrl =process.env.REACT_APP_API_URL;
  // const apiUrl='http://localhost:5000'
  const apiUrl='https://form-data-server.vercel.app'
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      return;
    }

    // Clear errors
    setError("");
    setLoading(true);  // Set loading state to true

    try {
      // Send data to the backend using Axios POST request
    //  console.log("waiting for submit");
      const response = await axios.post(`${apiUrl}/api/login`, {
        email,
        password,
      });
     
      console.log("Server Response:", response.data);
      console.log(email, password);
      alert("near to cookie check")
      const token = Math.floor(Math.random() * 100000000);
       Cookies.set('token',token , {
                    expires: 0.02, // 1 hour
       });
      
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error("Error during login:", err);
     setError("Login failed. Please try again.");
    } finally {
      setLoading(false);  // Set loading state back to false
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Login</h2>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.field}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

// Basic inline styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  form: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "15px",
    textAlign: "center",
  },
  field: {
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.9em",
    marginBottom: "10px",
  },
};

export default LoginForm;
