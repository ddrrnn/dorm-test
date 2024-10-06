import React, { useState } from 'react';
import { useAuth } from '../../AuthContext';
import { Navigate, Link } from 'react-router-dom';

const LoginDormer = () => {
  const { login, user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setRedirect(true); 
    } catch (error) {
      setError(error.message);
    }
  };


  if (user && redirect) {
    return <Navigate to="/dormers" replace />;
  }

  return (
    <div>
      <h2>Log in as:</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ marginTop: '20px' }}>

            <Link to="/login/manager">
                <button style={{ marginRight: '10px'}}>Dorm Manager</button>
            </Link>

            <Link to="/login/dormer">
            <button style={{ backgroundColor: 'gray' }}>
              Dormer</button>
            </Link>
      </div>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <div style={{ marginTop: '20px' }}>

            <p>Don't have an account?</p>

            <Link to="/signup">
                <p>Sign up</p>
            </Link>
      </div>

    </div>
  );
};

export default LoginDormer;
