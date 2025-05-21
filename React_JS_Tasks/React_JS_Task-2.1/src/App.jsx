import React, { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Ram' },
    { id: 2, name: 'Mohan' },
    { id: 3, name: 'Sachin' },
    { id: 4, name: 'Mayank' }
  ]);

  const updateSecondIndex = () => {
    const updated = [...items];
    updated[2] = { ...updated[2], name: '✅ Updated name Shivam' };
    setItems(updated);
  };

  return (
    <div className="container mt-2 ms-5 ">
      <h3 className="text-center mb-4">Array Update</h3>
      <ul className="list-group mb-3">
        {items.map((item, index) => (
          <li key={item.id} className="list-group-item">
            <strong>Index {index}</strong>: {item.name}
          </li>
        ))}
      </ul>
      <div className="text-center">
        <Button variant="contained" color="primary" onClick={updateSecondIndex}>
          Update Index 2
        </Button>
      </div>
    </div>
  );
}

export default App;
