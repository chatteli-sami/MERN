import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    available: true,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => navigate("/books"))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" onChange={handleChange} required />
      </label>
      <label>
        Author:
        <input type="text" name="author" onChange={handleChange} required />
      </label>
      <label>
        Year:
        <input type="number" name="year" onChange={handleChange} required />
      </label>
      <label>
        Available:
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={() =>
            setFormData({ ...formData, available: !formData.available })
          }
        />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;
