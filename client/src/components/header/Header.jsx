import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <nav className='app-nav'>
          <div>
            <Link to='/' className='app-nav__logo'>
              Materials
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
