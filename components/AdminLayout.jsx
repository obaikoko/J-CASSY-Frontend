import { useState, useEffect } from 'react';
import style from '../styles/dashboard.module.css';
import Link from 'next/link';
import {
  FaCogs,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaStar,
  FaMoneyBill,
  FaSignOutAlt,
  FaSun,
  FaBell,
  FaShoppingBasket,
  FaTv,
  FaLaptopCode,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '@/src/features/auth/authSlice';
import Dashboard from './Dashboard';
import Products from './Products';
import Order from './Order';
import Custormers from './Custormers';
import Transaction from './Transaction';
import Settings from './Settings';

function AdminLayout() {
  const dispatch = useDispatch();
  const [open, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsLoggedIn(user);
  }, [isLoggedIn, user]);

  const menuBtnClicked = () => {
    setIsOpen(!open);
  };

  const onClick = () => {
    dispatch(logout());
    dispatch(reset());
    window.location.reload();
  };

  const [selectedSection, setSelectedSection] = useState(() => {
    // Initialize with the value from localStorage, or default to 'dashboard'
    return localStorage.getItem('selectedSection') || 'dashboard';
  });

  const handleSectionChange = (sectionName) => {
    setIsOpen(!open);
    setSelectedSection(sectionName);
    localStorage.setItem('selectedSection', sectionName); // Save to localStorage
  };
  return (
    <div>
      <div id='overlayShow' className={open ? `${style.overlay}` : ''}></div>

      <aside
        className={
          open
            ? `${style.mobileMainMenu} ${style.hideMenu}`
            : `${style.mobileMainMenu}`
        }
      >
        <ul>
          <li className={selectedSection === 'dashboard' ? style.active : ''}>
            <button onClick={() => handleSectionChange('dashboard')}>
              <div className={style.icon}>
                <FaTv />
              </div>
              Dashboard
            </button>
          </li>
          <li className={selectedSection === 'products' ? style.active : ''}>
            <button onClick={() => handleSectionChange('products')}>
              <div className={style.icon}>
                <FaShoppingBasket />
              </div>
              Products
            </button>
          </li>
          <li className={selectedSection === 'orders' ? style.active : ''}>
            <button onClick={() => handleSectionChange('orders')}>
              <div className={style.icon}>
                <FaShoppingCart />
              </div>
              Orders
            </button>
          </li>
          <li className={selectedSection === 'customers' ? style.active : ''}>
            <button onClick={() => handleSectionChange('customers')}>
              <div className={style.icon}>
                <FaUsers />
              </div>
              Customers
            </button>
          </li>
          <li
            className={selectedSection === 'transactions' ? style.active : ''}
          >
            <button onClick={() => handleSectionChange('transactions')}>
              <div className={style.icon}>
                <FaMoneyBill />
              </div>
              Transactions
            </button>
          </li>
          <li className={selectedSection === 'settings' ? style.active : ''}>
            <button onClick={() => handleSectionChange('settings')}>
              <div className={style.icon}>
                <FaCogs />
              </div>
              Settings
            </button>
          </li>
          <li>
            <button onClick={onClick}>
              <div className={style.icon}>
                <FaSignOutAlt />
              </div>
              Logout
            </button>
          </li>
        </ul>
      </aside>
      <header className={style.header}>
        <Link href='/' className={style.adminIcon}>
          <h1>
            <FaLaptopCode />
          </h1>
          <h2>ADMINISTRATOR</h2>
        </Link>
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

        <form className={style.form}>
          <input type='text' placeholder='Search' />
        </form>
        <ul>
          <li>
            <button>
              <h2>
                <FaSun />
              </h2>
            </button>
          </li>
          <li>
            <button>
              <h2>
                <FaBell />
              </h2>
            </button>
          </li>
          <li>
            <button>
              <div className={style.imgContainer}>
                <img
                  src='https://randomuser.me/api/portraits/women/7.jpg'
                  alt='name'
                />
              </div>
            </button>
          </li>
        </ul>
      </header>
      <main className={style.main}>
        {selectedSection === 'dashboard' && <Dashboard />}
        {selectedSection === 'products' && <Products />}
        {selectedSection === 'orders' && <Order />}
        {selectedSection === 'customers' && <Custormers />}
        {selectedSection === 'transactions' && <Transaction />}
        {selectedSection === 'settings' && <Settings />}
      </main>
    </div>
  );
}

export default AdminLayout;
