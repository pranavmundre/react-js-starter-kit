
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>403 - Unauthorized</h1>
      <p>You do not have access to this page.</p>
            <Link to="/login" className="btn btn-info">Login</Link>
    </div>
  );
}

export default NotFound;
