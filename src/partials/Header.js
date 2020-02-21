import React from 'react';
import './header.css'

function Header() {
  return (
    <div className="Header">
      <header>
        <nav class="header-nav">
          <a class="header-title" href="/">scheduleMe</a>
          <ul>
            <li><a href="/new">New</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
          </nav>
      </header>
    </div>
  );
}

export default Header;
