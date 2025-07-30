// AddBookForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    image: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/add-book', formData);
      alert('✅ Book added successfully!');
      setFormData({
        title: '',
        author: '',
        price: '',
        image: '',
        category: '',
        description: '',
      });
    } catch (error) {
      alert('❌ Failed to add book');
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded" rows="3"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
