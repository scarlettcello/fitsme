import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h3>Oops! The page doesn't exist.</h3>
      <br />
      <Link to="/">Go to Home page.</Link>
    </div>
  )
}

export default NotFound;
