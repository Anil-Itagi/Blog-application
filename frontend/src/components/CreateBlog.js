import React, { useEffect, useState } from "react";
import {useNavigate,useLocation} from 'react-router-dom'
import axios from "axios";
import Cookies from 'js-cookie'
const apiUrl = process.env.REACT_APP_API_KEY;
const CreateBlog = ({ setIsCreated, userName }) => {

  const location = useLocation();
  const [formData, setFormData] = useState({
    userId: "",
    userName,
    title: "",
    author: "",
    category: "",
    tags: "", 
    metaDescription: "",
    summary: "",
    attachments: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
      const id = Cookies.get('user');

      setFormData((formData) => ({
      ...formData, // Spread the existing formData values
        userId: id, // Update the userId field
      }));
  }, [location])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST the blog data to create the blog
     
      const blogResponse = await axios.post(`${apiUrl}/api/createBlog`, formData);
      
      console.log("Blog Data Submitted:", blogResponse.data);
      setIsCreated(true);
      alert("Blog created successfully");
      navigate('/blogs');
      // Optionally handle response (e.g., show success message)
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  const generateSummary = async () => {
    try {
     
      const summaryResponse = await axios.post(`${apiUrl}/api//generateSummary`,formData);
      console.log(summaryResponse.data);
      setFormData({ ...formData, summary: summaryResponse.data.summary });
    } catch (error) {
      console.error("Error generating summary:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        {/* Meta Description */}
        <div className="mb-3">
          <label className="form-label">Meta Description</label>
          <input
            type="text"
            name="metaDescription"
            className="form-control"
            value={formData.metaDescription}
            onChange={handleChange}
          />
        </div>

        {/* Author */}
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-3">
          <label className="form-label">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            className="form-control"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        {/* Attachments */}
        <div className="mb-3">
          <label className="form-label">Attachment</label>
          <input
            type="text"
            name="attachments"
            className="form-control"
            placeholder="Image address or URL"
            onChange={handleChange}          
          />
        </div>

        {/* Summary */}
        <div className="mb-3">
          <label className="form-label">Summary</label>
          <textarea
            name="summary"
            className="form-control"
            rows="3"
            value={formData.summary}
            onChange={handleChange}
          ></textarea>
          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={generateSummary}
          >
            Generate Summary
          </button>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
