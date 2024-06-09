import Head from 'next/head';
// import styles from '@/styles/Home.module.css';
// import ProductForm from '@/components/ProductForm';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
// import { loadProducts } from '@/src/features/products/productSlice';
// import { getTotal } from '@/src/features/cart/cartSlice';
import { useGetProductsQuery } from '@/features/slices/productsApiSlice';
import ProductCard from '@/components/ProductCard';
import Spinner from '@/components/Spinner';
import style from '../styles/gallery.module.css';
import MyCarousel from '@/components/MyCarousel';

function gallery() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState('');

  const { data, error, isLoading } = useGetProductsQuery({});
  console.log(data);

  return (
    <>
      <div className={style.container}>
        <div className={style.galleryBg}></div>
        <div className={style.gallery}>
          <div className={style.galleryTitle}>
            <h1>J CASSY COLLECTIONS</h1>
          </div>
          <div style={{ width: '90%' }}>
            <MyCarousel />
          </div>
          {isLoading && <Spinner />}
          <section className={style.galleryItems}>
            {data ? (
              data.products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div className={style.error}>
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
