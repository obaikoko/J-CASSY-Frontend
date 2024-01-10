import style from '../styles/dashboard.module.css';
import BarChart from './BarChart';
import {
  FaFileInvoiceDollar,
  FaCartArrowDown,
  FaShoppingBag,
} from 'react-icons/fa';

function Dashboard() {
  return (
    <>
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
    </>
  );
}

export default Dashboard;
