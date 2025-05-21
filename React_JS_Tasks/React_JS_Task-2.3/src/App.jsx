import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('Hello');               // String
  const [count, setCount] = useState(0);                   // Number
  const [isVisible, setIsVisible] = useState(true);        // Boolean
  const [user, setUser] = useState({ name: 'Sachin' });     // Object
  const [items, setItems] = useState([1, 2, 3]);           // Array

  const handleUpdate = () => {
    setText('Updated');
    setCount(count + 1);
    setIsVisible(!isVisible);
    setUser({ ...user, name: 'Mohan' });
    setItems([...items, items.length + 1]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>React State: Data Types</h2>
      <p><strong>String:</strong> {text}</p>
      <p><strong>Number:</strong> {count}</p>
      <p><strong>Boolean:</strong> {isVisible.toString()}</p>
      <p><strong>Object:</strong> {JSON.stringify(user)}</p>
      <p><strong>Array:</strong> {items.join(', ')}</p>

      <button onClick={handleUpdate}>Update State</button>
    </div>
  );
}

export default App;
