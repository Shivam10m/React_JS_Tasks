import React, { useState } from 'react';

function App() {
  // 1. Employee data in state (array of objects)
  const [employees] = useState([
    { name: 'John', age: 30, salary: 50000, designation: 'Developer' },
    { name: 'Alice', age: 25, salary: 45000, designation: 'Designer' }
  ]);

  // 2. Product object in state
  const [product, setProduct] = useState({
    name: 'Laptop',
    price: 65000,
    brand: 'HP'
  });

  // Update 2 properties
  const updateProduct = () => {
    setProduct({
      ...product,
      price: 72000,
      brand: 'Dell'
    });
  };

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} | Age: {emp.age} | Salary: {emp.salary} | {emp.designation}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Product Info</h2>
      <p>Name: {product.name}</p>
      <p>Price: Rs.{product.price}</p>
      <p>Brand: {product.brand}</p>
      <button onClick={updateProduct}>Update Product</button>
    </div>
  );
}

export default App;
