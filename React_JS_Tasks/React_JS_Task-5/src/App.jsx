import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ClassPosts from './components/ClassPosts';
import FunctionPost from './components/FunctionPost';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Class Posts</Link> | <Link to="/post">Function Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ClassPosts />} />
        <Route path="/post" element={<FunctionPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
