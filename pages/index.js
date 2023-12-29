import Head from 'next/head';
// import styles from '@/styles/Home.module.css';
import ProductForm from '@/components/ProductForm';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { loadProducts } from '@/src/features/products/productSlice';
import { getTotal } from '@/src/features/cart/cartSlice';
import ProductCard from '@/components/ProductCard';
import Spinner from '@/components/Spinner';
import Showcase from './Showcase';


export default function Home() {
  const dispatch = useDispatch();
  const [goods, setGoods] = useState('');
  const [admin, setAdmin] = useState('')
  const { products, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.products
  );
  const {user} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(getTotal());
    setAdmin(user)
    if (isSuccess) {
      setGoods(products);
    }
  }, [isSuccess]);

 
  
  return (
    <>
      <Head>
        <title>J CASSY</title>
      </Head>
      <main>
        <Showcase /> 
      </main>
    </>
  );
}
