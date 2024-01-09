import Link from 'next/link';
import { logout, reset } from '@/src/features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import style from '../styles/nav.module.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const [open, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsLoggedIn(user);
  }, [isLoggedIn, user]);

  const menuBtnClicked = () => {
    setIsOpen(!open);
    document.body.classList.toggle('stopScrolling');
  };
  const onClick = () => {
    dispatch(logout());
    dispatch(reset());
    window.location.reload();
  };
  return (
    <>
      <div id='overlayShow' className={open ? `${style.overlay}` : ''}></div>
      <div
        id='mobileMenu'
        className={
          open
            ? `${style.mobileMainMenu} ${style.showMenu}`
            : `${style.mobileMainMenu}`
        }
      >
        <ul>
          <li className={style.mobileOnly}>
            <Link href='/' onClick={menuBtnClicked} className={style.navLink}>
              home
            </Link>
          </li>
          <li className={style.mobileOnly}>
            <Link
              href='/about'
              onClick={menuBtnClicked}
              className={style.navLink}
            >
              about
            </Link>
          </li>
          <li className={style.mobileOnly}>
            <Link
              href='/gallery'
              onClick={menuBtnClicked}
              className={style.navLink}
            >
              Gallery
            </Link>
          </li>
          <li className={style.mobileOnly}>
            <Link
              href='/cart'
              onClick={menuBtnClicked}
              className={style.navLink}
            >
              cart
            </Link>
          </li>

          <li>
            <Link href='/' onClick={menuBtnClicked} className={style.navLink}>
              new arrivals
            </Link>
          </li>
          <li>
            <Link href='/' onClick={menuBtnClicked} className={style.navLink}>
              promo
            </Link>
          </li>
          <li>
            <Link href='/' onClick={menuBtnClicked} className={style.navLink}>
              services
            </Link>
          </li>
          <li>
            <Link href='/' onClick={menuBtnClicked} className={style.navLink}>
              out of stock
            </Link>
          </li>
          <li className={style.mobileOnly}>
            {isLoggedIn ? (
              <Link href='/login' className={style.navLink} onClick={onClick}>
                LOGOUT
              </Link>
            ) : (
              <Link
                href='/login'
                onClick={menuBtnClicked}
                className={style.navLink}
              >
                LOGIN
              </Link>
            )}
          </li>
        </ul>
      </div>
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
            <li>
              <Link href='/about' className={style.navLink}>
                about
              </Link>
            </li>

            <li>
              <Link href='/gallery' className={style.navLink}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href='/cart' className={style.navLink}>
                cart
              </Link>
            </li>
            <li>
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
      {/* Hambuger Menu */}
      <button
        id='menuBtn'
        className={`${style.hambuger} ${open ? `${style.open}` : ''} `}
        onClick={menuBtnClicked}
        type='button'
      >
        <span className={style.hambugerTop}></span>
        <span className={style.hambugerMiddle}></span>
        <span className={style.hambugerButtom}></span>
      </button>
    </>
  );
};

export default Navbar;
