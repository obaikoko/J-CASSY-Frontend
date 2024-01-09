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
  FaFileInvoiceDollar,
  FaCartArrowDown,
  FaShoppingBag,
  FaSignOutAlt,
  FaSun,
  FaBell,
  FaShoppingBasket,
  FaTv,
  FaLaptopCode,
  FaBars,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '@/src/features/auth/authSlice';
import BarChart from './BarChart';

function Dashboard() {
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
  return (
    <>
      <div className={style.container}>
        <aside
          className={
            open
              ? `${style.mobileMainMenu} ${style.hideMenu}`
              : `${style.mobileMainMenu}`
          }
        >
          <ul>
            <li className={style.active}>
              <div className={style.icon}>
                <FaTv />
              </div>
              Dashboard
            </li>
            <li>
              <div className={style.icon}>
                <FaShoppingBasket />
              </div>
              Products
            </li>
            <li>
              <div className={style.icon}>
                <FaShoppingCart />
              </div>
              Orders
            </li>
            <li>
              <div className={style.icon}>
                <FaUsers />
              </div>
              Customers
            </li>
            <li>
              <div className={style.icon}>
                <FaChartBar />
              </div>
              Statistics
            </li>
            <li>
              <div className={style.icon}>
                <FaStar />
              </div>
              Reviews
            </li>
            <li>
              <div className={style.icon}>
                <FaMoneyBill />
              </div>
              Transactions
            </li>
            <li>
              <div className={style.icon}>
                <FaCogs />
              </div>
              Settings
            </li>
            <li>
              <Link className={style.logout} href='/' onClick={onClick}>
                <div className={style.icon}>
                  <FaSignOutAlt />
                </div>
                Logout
              </Link>
            </li>
          </ul>
        </aside>
        <header className={style.header}>
          <div className={style.adminIcon}>
            <h1>
              <FaLaptopCode />
            </h1>
            <h2>ADMINISTRATOR</h2>
          </div>
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
        <main
          className={
            open ? `${style.main} ${style.expandMain}` : `${style.main}`
          }
        >
          <div className={style.dashboardBody}>
            <h2>Dashboard</h2>
            <ul>
              <li>
                <div className={style.icon}>
                  <h1>
                    <FaFileInvoiceDollar />
                  </h1>
                </div>
                <div className={style.text}>
                  <small>Total Sales </small>
                  <h4>$176,727,210.46</h4>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <h1>
                    <FaCartArrowDown />
                  </h1>
                </div>
                <div className={style.text}>
                  <small>Total Orders </small>
                  <h4>12,892</h4>
                </div>
              </li>
              <li>
                <div className={style.icon}>
                  <h1>
                    <FaShoppingBag />
                  </h1>
                </div>
                <div className={style.text}>
                  <small>Total Products </small>
                  <h4>1,588</h4>
                </div>
              </li>
            </ul>
            <div className={style.chart}>
              <BarChart />
            </div>
          </div>
          <div className={style.orders}>
            <h2>Latest Orders</h2>
            <div className={style.orderInfo}>
              <div className={style.userId}>
                <ul>
                  <li>s/n</li>
                  <li>name</li>
                </ul>
              </div>
              <div className={style.userDetails}>
                <ul>
                  <li>Email</li>
                  <li>Amount</li>
                  <li>Status</li>
                  <li>Date</li>
                  <li>...</li>
                </ul>
              </div>
            </div>
            <div className={style.orderInfo}>
              <div className={style.userId}>
                <ul>
                  <li>s/n</li>
                  <li>name</li>
                </ul>
              </div>
              <div className={style.userDetails}>
                <ul>
                  <li>Email</li>
                  <li>Amount</li>
                  <li>Status</li>
                  <li>Date</li>
                  <li>...</li>
                </ul>
              </div>
            </div>
            <div className={style.orderInfo}>
              <div className={style.userId}>
                <ul>
                  <li>s/n</li>
                  <li>name</li>
                </ul>
              </div>
              <div className={style.userDetails}>
                <ul>
                  <li>Email</li>
                  <li>Amount</li>
                  <li>Status</li>
                  <li>Date</li>
                  <li>...</li>
                </ul>
              </div>
            </div>
            <div className={style.orderInfo}>
              <div className={style.userId}>
                <ul>
                  <li>s/n</li>
                  <li>name</li>
                </ul>
              </div>
              <div className={style.userDetails}>
                <ul>
                  <li>Email</li>
                  <li>Amount</li>
                  <li>Status</li>
                  <li>Date</li>
                  <li>...</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
