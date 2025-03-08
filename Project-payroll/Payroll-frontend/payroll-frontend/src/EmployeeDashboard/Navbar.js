
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/dashboard/leaves">Leaves</Link>
        </li>
        <li className="navbar-item">
          <Link to="/dashboard/salary">Salary</Link>
        </li>
        <li className="navbar-item">
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
