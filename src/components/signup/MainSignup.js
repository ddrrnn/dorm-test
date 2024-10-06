import React from 'react';
import { Link } from 'react-router-dom';

function MainSignup() {
  return (
    <div>
      <h2>Sign up as:</h2>
      <div>
      <Link to="/signup/manager">
        <button>Dorm Manager</button>
    </Link>
    <Link to="/signup/dormer">
        <button>Dormer</button>
    </Link>
    </div>

    <div style={{ marginTop: '20px' }}>

            <p>Already have an account?</p>

            <Link to="/login/dormer">
                <p>Login</p>
            </Link>
      </div>

    </div>

  );
}

export default MainSignup;
