import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.anchor} href="https://github.com/KaskMIL" target="blank">Tom Milanesi </a>
      &copy; All Rights Reserved
    </footer>
  );
}

export default Footer;
