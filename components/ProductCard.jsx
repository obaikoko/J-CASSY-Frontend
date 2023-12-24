import React from 'react';
import style from '../styles/gallery.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/src/features/cart/cartSlice';
import Link from 'next/link';

function ProductCard({ good }) {
  const dispatch = useDispatch();
  const onClick = (good) => {
    dispatch(addToCart(good));
  };
  return (
      
     
        <div className={style.galleryItem}>
          <div className={style.galleryImg}>
            <img src={good.image.url} alt={good.title} />
          </div>
          <ul>
            <li>
              <h1>{good.title}</h1>
            </li>
            <li>
              <h4>Price: ${good.price}</h4>
            </li>
            <li>
              <p>{good.description}</p>
            </li>
            <li>
              <div className='galleryBtn'>
                <button
                  className='btn btn-primary'
                  onClick={() => onClick(good)}
                >
                  Add to Cart
                </button>
                <Link href={`products/${good._id}`}>
                  <button>view</button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      /* <div className='m-4 border rounded  shadow p-4'>
        <div className='text-center'>
          <img
            src={good.image.url}
            alt={good.title}
            className='img-fluid  mb-3'
            style={{ width: '150px', height: '150px' }}
          />
        </div>
        <h3 className='text-primary'>{good.title}</h3>
        <p className='text-muted'>{good.description}</p>
        <p className='text-success'>Price: ${good.price}</p>
        <button className='btn btn-primary' onClick={() => onClick(good)}>
          Add to Cart
        </button>
        <Link href={`products/${good._id}`}>
          <button className='btn btn-light text-primary'>view</button>
        </Link>
      </div> */
      
    
  );
}

export default ProductCard;
