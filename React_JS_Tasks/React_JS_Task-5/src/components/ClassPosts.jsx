import React, { Component, createRef } from 'react';

class ClassPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.listRef = createRef(); // Ref
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data.slice(0, 5) }));
  }

  render() {
    return (
      <>
        <h2>First 5 Posts (Class Component)</h2>
        <ul ref={this.listRef}>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ClassPosts;
