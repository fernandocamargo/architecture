import React from 'react';
import { Link } from 'react-router-dom';

export const goAnywhere = () =>
  Math.random()
    .toString(36)
    .substring(2, 15);

export default ({ children }) => (
  <div>
    <header>
      <h1>App();</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to={`/${goAnywhere()}`}>Random</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </div>
);
