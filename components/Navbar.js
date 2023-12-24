import Link from 'next/link';
import { logout, reset } from '@/src/features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import style from '../styles/nav.module.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsLoggedIn(user);
  }, [isLoggedIn, user]);

  const onClick = () => {
    dispatch(logout());
    dispatch(reset());
    window.location.reload();
  };
  return (
    <header className={style.mainHeader}>
      <div className={style.logo}>
        <Link href='/'>
          <img
            src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1703285720/J-Cassy/SGN_12_22_2023_1703278109808_tarbf9.png'
            alt='JCASSY'
          />
        </Link>
      </div>
      <nav className={style.navbar}>
        <ul>
          <li>
            <Link href='/' className={style.navLink}>
              home
            </Link>
          </li>
          <li className={style.navItem}>
            <Link href='/about' className={style.navLink}>
              about
            </Link>
          </li>
          <li className={style.navItem}>
            <Link href='/cart' className={style.navLink}>
              cart
            </Link>
          </li>
          <li className={style.navItem}>
            <Link href='/gallery' className={style.navLink}>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            {isLoggedIn ? (
              <Link href='/login' className={style.navLink} onClick={onClick}>
                LOGOUT
              </Link>
            ) : (
              <Link href='/login' className={style.navLink}>
                LOGIN
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
