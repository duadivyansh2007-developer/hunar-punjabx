'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [role, setRole] = useState('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration successful! Please login.');
        router.push('/login');
      } else {
        alert(`Error: ${data.error || data.msg || 'Registration failed'}`);
      }
    } catch (err) {
      console.error(err);
      alert('Failed to connect to the backend server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '500px', margin: '4rem auto', fontFamily: 'Inter, sans-serif' }}>
      <div className="card" style={{ padding: '2rem', borderRadius: '12px', background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#00283e' }}>Create an Account</h2>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>Full Name / Organization Name</label>
            <input type="text" required placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>Email Address</label>
            <input type="email" required placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>Password</label>
            <input type="password" required placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#475569' }}>Register As</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', background: 'white' }}>
              <option value="student">Student</option>
              <option value="institute">Institute</option>
              <option value="company">Company</option>
            </select>
          </div>
          <button type="submit" disabled={loading} style={{ width: '100%', marginTop: '1rem', background: '#00283e', color: 'white', padding: '0.75rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#475569' }}>
          Already have an account? <a href="/login" style={{ color: '#0ea5e9', textDecoration: 'none' }}>Login</a>
        </p>
      </div>
    </div>
  );
}
