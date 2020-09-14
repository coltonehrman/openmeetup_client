import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ text, className }) => (
  <Link to="/" className={className}>
    <h1>{text}</h1>
  </Link>
);

export default Logo;
