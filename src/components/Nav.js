import React from 'react';
import './header.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
      <div className="Nav">
        <header>
          <nav class="header-nav">
            <Link class="header-title" to="/">scheduleMe</Link>
            <ul>
              <li>
                <Link to='/about' class="header-nav">
                  About
                </Link>
              </li>
              <li>
                <Link to='/login' class="header-nav">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
  );
}

export default Nav;
