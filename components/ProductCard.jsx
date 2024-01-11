import React from 'react';
import style from '../styles/products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/src/features/cart/cartSlice';
import Link from 'next/link';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';

function ProductCard({ good, admin }) {
  const dispatch = useDispatch();
  const onClick = (good) => {
    dispatch(addToCart(good));
  };
  return (
    <div className={style.galleryItem}>
      <div className={style.galleryImg}>
        <Link href={`products/${good._id}`}>
          <img src={good.image.url} alt={good.title} />
        </Link>
      </div>
      <ul>
        <li>
          <p>{good.title}</p>
        </li>
        <li>
          <h4>Price: ${good.price}</h4>
        </li>
        <li>
          {admin ? (
            <div className={style.productBtn}>
              <button style={{ color: 'green' }}>Edit</button>
              <button style={{ color: 'red' }}>Delete</button>
            </div>
          ) : (
            <div className={style.galleryBtn}>
              <button className='btn btn-primary' onClick={() => onClick(good)}>
                Add to Cart
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ProductCard;
