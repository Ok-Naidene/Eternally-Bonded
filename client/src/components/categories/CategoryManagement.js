import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    axios.get('/categories').then((response) => {
      setCategories(response.data);
    });
  }, []);

  const handleCategorySubmit = (e) => {
    e.preventDefault();
    axios.post('/categories', { name: newCategory }).then((response) => {
      setCategories([...categories, response.data]);
      setNewCategory('');
    });
  };

  return (
    <div>
      <h2>Manage Categories</h2>
      <form onSubmit={handleCategorySubmit}>
        <input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button type="submit">Add Category</button>
      </form>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManagement;
