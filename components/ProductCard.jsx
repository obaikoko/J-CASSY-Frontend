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
          <h5>Price: ${good.price}</h5>
        </li>
        <li>
          {admin ? (
            <div>
              <Link className={style.productLink} href={`products/${good._id}`}>
                Details
              </Link>
            </div>
          ) : (
            <div className={style.galleryBtn}>
              <button  onClick={() => onClick(good)}>
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
