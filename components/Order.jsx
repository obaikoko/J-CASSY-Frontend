import React from 'react';
import style from '../styles/order.module.css';
import Link from 'next/link';
import {
  FaCalendar,
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
          <div className={style.product}>
            <h3>product</h3>
            <h3>Quantity</h3>
            <h3>Unit Price</h3>
            <h3>Total</h3>
          </div>

          <div className={style.paymentInfo}>
            <div className={style.card}>Card Details</div>
            <p>Business Name</p>
            <p>Phone</p>
          </div>
        </div>
        <button>save note</button>
      </main>
    </div>
  );
}

export default Order;
