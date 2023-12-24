import React from 'react';
import Navbar from './Navbar';
import Link from 'next/link';
import style from '../styles/layout.module.css';
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <footer className={style.footer}>
        <ul>
          <li>J CASSY &copy; 2023</li>
          <li>
            <Link className={style.footerLink} href='/#'>
              Twitter
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/#'>
              Youtube
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/#'>
              Instagram
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/#'>
              Linkdin
            </Link>
          </li>
          <li>
            <Link className={style.footerLink} href='/#'>
              FaceBook
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;
