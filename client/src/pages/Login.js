import React from 'react';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:1337/api/connect/google';
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Login to NutriChef</h1>
      <button
        onClick={handleGoogleLogin}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#4285F4',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;

