import React from 'react';
import style from '../styles/order.module.css';
import Link from 'next/link';
import {
  FaCalendar,
  FaCreditCard,
  FaMapMarkerAlt,
  FaPrint,
  FaUserCircle,
} from 'react-icons/fa';

function Order() {
  return (
    <div className={style.order}>
      <h1>Order</h1>
      <main>
        <div className={style.header}>
          <div className={style.dateInfo}>
            <div className={style.date}>
              <FaCalendar />
              <h4>Wed, January 17, 2024, 8:00PM</h4>
            </div>

            <small>#ID 72872647268</small>
          </div>

          <div className={style.headerBtn}>
            <button className={style.saveBtn}>save</button>
            <button className={style.printBtn}>
              <FaPrint />
            </button>
          </div>
        </div>

        <div className={style.customerInfo}>
          <div className={style.customer}>
            <h1>
              <FaUserCircle />
            </h1>
            <div className={style.customerTxt}>
              <h3>Customer</h3>
              <p>John Doe</p>
              <p>johndoe@gmail.com</p>
              <p>+442 6323 42</p>
              <Link className={style.link} href='/'>
                View profile
              </Link>
            </div>
          </div>
          <div className={style.deliveredTo}>
            <h1>
              <FaMapMarkerAlt />
            </h1>

            <div className='deliveredTxt'>
              <h3>Delivered to</h3>
              <p>City : Awka</p>
              <p>Street: Ifite</p>
              <p>Address: No1 Tezers Junction</p>
            </div>
          </div>
        </div>

        <div className={style.productInfo}>
          <div className={style.wrapper}>
            <div className={style.product}>
              <h3>product</h3>
              <h3>Qty</h3>
              <h3>Unit Price</h3>
              <h3>Total</h3>
            </div>
            <div className={style.productSection}>
              <h4>Snikers</h4>
              <p>3</p>
              <p>$200</p>
              <p>$600</p>
            </div>
            <div className={style.productSection}>
              <h4>Jungle Boots</h4>
              <p>1</p>
              <p>$100</p>
              <p>$100</p>
            </div>
            <div className={style.productSection}>
              <h4>Gucci Bag</h4>
              <p>2</p>
              <p>$900</p>
              <p>$1800</p>
            </div>
            <div className={style.productSection}>
              <h4>Wrist Watch</h4>
              <p>1</p>
              <p>$8500</p>
              <p>$8500</p>
            </div>
          </div>

          <div className={style.paymentInfo}>
            <h2>Payment Info</h2>
            <div className={style.card}>
              <FaCreditCard /> Master Card ********4563
            </div>
            <p>Business Name: Master Card, Inc.</p>
            <p>Phone: +445 521 5212</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Order;
