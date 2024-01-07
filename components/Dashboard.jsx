import React from 'react';
import style from '../styles/dashboard.module.css';
import Link from 'next/link';
import {
  FaCogs,
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaGlobe,
  FaStar,
  FaTags,
  FaPencilAlt,
  FaMoneyBill,
  FaFileInvoiceDollar,
  FaCartArrowDown,
  FaShoppingBag,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout, reset } from '@/src/features/auth/authSlice';
import BarChart from './BarChart';

function Dashboard() {

    const dispatch = useDispatch()

      const onClick = () => {
        dispatch(logout());
        dispatch(reset());
        window.location.reload();
      };
  return (
    <>
      ;
      <div className={style.container}>
        <aside className={style.aside}>
          <ul>
            <li className={style.active}>Dashboard</li>
            <li>Products</li>
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
                <FaGlobe />
              </div>
              Sellers
            </li>
            <li>
              <div className={style.icon}>
                <FaTags />
              </div>
              Hot Offers
            </li>
            <li>
              <div className={style.icon}>
                <FaCogs />
              </div>
              Settings
            </li>
            <li>
              <div className={style.icon}>
                <FaPencilAlt />
              </div>
              Appearance
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
        <main className={style.main}>
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

          <div className={style.orders}>
            <ul>
              <li></li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
