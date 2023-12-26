import Head from 'next/head';
// import styles from '@/styles/Home.module.css';
import ProductForm from '@/components/ProductForm';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { loadProducts } from '@/src/features/products/productSlice';
import { getTotal } from '@/src/features/cart/cartSlice';
import ProductCard from '@/components/ProductCard';
import Spinner from '@/components/Spinner';
import style from '../styles/gallery.module.css';

function gallery() {
  const dispatch = useDispatch();
  const [goods, setGoods] = useState('');
  const [admin, setAdmin] = useState('');
  const { products, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.products
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(getTotal());
    setAdmin(user);
    if (isSuccess) {
      setGoods(products);
    }
  }, [isSuccess]);
  return (
    <>
      <div className={style.container}>
        <div className={style.galleryBg}></div>
        <div className={style.gallery}>
          <div className={style.galleryTitle}>
            <h1>J CASSY COLLECTIONS</h1>
          </div>
          <section className={style.galleryItems}>
            {goods ? (
              goods.map((good) => <ProductCard key={good._id} good={good} />)
            ) : (
              <div>
                <h4>Something went wrong</h4>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default gallery;
