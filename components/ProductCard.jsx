import React from 'react';
import style from '../styles/products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { addToCart } from '@/features/slices/cartSlice';
import { useState } from 'react';

function ProductCard({ product, admin }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const onClick = (product) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className={style.galleryItem}>
      <div className={style.galleryImg}>
        <Link href={`products/${product._id}`}>
          <img src={product.image.url} alt={product.title} />
        </Link>
      </div>
      <ul>
        <li>
          <Link className={style.link} href={`products/${product._id}`}>
            {product.title}
          </Link>
        </li>
        <li>
          <h5>Price: ${product.price}</h5>
        </li>
        <li>
          {admin ? (
            <div>
              <Link
                className={style.productLink}
                href={`products/${product._id}`}
              >
                Details
              </Link>
            </div>
          ) : (
            <button
              className={style.galleryBtn}
              onClick={() => onClick(product)}
            >
              Add to Cart
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ProductCard;
