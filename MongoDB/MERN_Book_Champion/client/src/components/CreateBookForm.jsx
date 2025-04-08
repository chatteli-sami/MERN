import React, { useState } from 'react';
import axios from 'axios';

const CreateBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pages: 0
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    setFormData({ ...formData, [name]: value });
    setServerError(null);
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '') &&
           Object.values(errors).every(err => err === '');
  };

  const handleSubmit =(e) => {
    e.preventDefault();
    if (!isFormValid()) {
      const newErrors = {};
      Object.entries(formData).forEach(([key, value]) => {
        const error = validateField(key, value);
        if (error) {
          newErrors[key] = error;
        }
      });
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/books', formData);
      setSuccessMessage("Book created successfully!");
      setFormData({ title: '', author: '', description: '' });
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data) {
        const { name, statusCode, message, validations } = error.response.data;
        setServerError({ name, statusCode, message });
        setErrors(validations || {});
      } else {
        setServerError({ name: "Error", statusCode: 500, message: "Something went wrong" });
      }
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={formData.title} 
            onChange={handleChange} 
          />
          {errors.title && <small className="error">{errors.title}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input 
            type="text" 
            name="author" 
            id="author" 
            value={formData.author} 
            onChange={handleChange} 
          />
          {errors.author && <small className="error">{errors.author}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="Pages">Pages</label>
          <input type="number" value={formData.pages} onChange={handleChange} />
          {errors.pages && <small className="error">{errors.pages}</small>}
        </div>

        <button type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </form>

      {serverError && (
        <div className="server-error">
          <h3>Error: {serverError.name} ({serverError.statusCode})</h3>
          <p>{serverError.message}</p>
        </div>
      )}

      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default CreateBookForm;
