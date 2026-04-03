'use client';
import { useState } from 'react';

export default function Register() {
  const [role, setRole] = useState('student');

  const handleRegister = (e) => {
    e.preventDefault();
    window.location.href = '/login';
  };

  return (
    <div className="container" style={{ maxWidth: '500px', marginTop: '2rem' }}>
      <div className="card">
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Full Name / Organization Name</label>
            <input type="text" required placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" required placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required placeholder="••••••••" />
          </div>
          <div className="form-group">
            <label>Register As</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="institute">Institute</option>
              <option value="company">Company</option>
            </select>
          </div>
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>Register</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem' }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
