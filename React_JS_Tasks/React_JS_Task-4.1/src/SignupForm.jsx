import React, { Component } from 'react';

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    submitted: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    if (name && email) {
      this.setState({ submitted: true });
    } else {
      alert('Please fill out both fields');
    }
  };

  render() {
    return (
      <div>
        <h3>Signup Form (Class Component)</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>

        {this.state.submitted && <p>Form is submitted!</p>}
      </div>
    );
  }
}

export default SignupForm;
