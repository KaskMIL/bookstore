import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.oval}>
        <ImUser />
      </div>
    </header>
  );
}

export default Header;
