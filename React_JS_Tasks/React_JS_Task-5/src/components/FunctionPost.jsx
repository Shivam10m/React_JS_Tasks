import React, { useEffect, useState } from 'react';

function FunctionPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => setPost(data));
  }, []);

  return (
    <>
      <h2>Post ID 1 (Function Component)</h2>
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
}

export default FunctionPost;
