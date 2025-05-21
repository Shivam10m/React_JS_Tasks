import React, { useState } from 'react';

function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [userData, setUserData] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      setUserData(form);
    } else {
      alert('Please fill out both fields');
    }
  };

  return (
    <div>
      <h3>Login Form (Function Component)</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>

      {userData && (
        <div>
          <h4>User Data:</h4>
          <p>Email: {userData.email}</p>
          <p>Password: {userData.password}</p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
