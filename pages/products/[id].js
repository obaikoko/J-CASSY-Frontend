import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import UpdateProductForm from '@/components/UpdateProductForm';
import { useState, useEffect } from 'react';
import {
  useDeleteProductMutation,
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
} from '@/features/slices/productsApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import style from '../../styles/id.module.css';
import Spinner from '@/components/Spinner';

function ProductDetails() {
  const router = useRouter();
  const { id: productId } = router.query;
  const [data, setData] = useState('');
  const [admin, setAdmin] = useState('');

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductByIdQuery(productId);
  // const { product, isSuccess, isLoading } = useSelector(
  //   (state) => state.products
  // );
  // const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (id) {
  //     dispatch(loadProduct(id));
  //     setAdmin(user);
  //   }

  //   setData(product);
  // }, [id]);

  // useEffect(() => {
  //   if (isSuccess) {
  //     setData(product);
  //   }
  // }, [isSuccess, product]);

  const onClick = () => {
    // dispatch(deleteProduct(id));
  };

  // if (isLoading) {
  //   return <Spinner />;
  // }

  const goBack = () => {
    router.back();
  };
  return (
    <>
      <div className={style.container}>
        <button onClick={goBack}>Go Back</button>
        {isLoading && <Spinner />}

        {product && (
          <section className={style.product}>
            <div className={style.productDetails}>
              <div className={style.productImg}>
                <img src={product.image.url} alt={product.title} />
              </div>
              <ul className={style.productTxt}>
                <li>
                  <h2> {product.title}</h2>
                </li>

                <li>Category: {product.category}</li>
                <li>Price: ${product.price}</li>
                <li>
                  Description: <p>{product.description}</p>
                </li>
              </ul>
              <div></div>
            </div>
            <div></div>
          </section>
        )}
      </div>

      {/* <div className={style.container}>
        <button onClick={goBack}>Go Back</button>
        {isLoading && <Spinner />}
        {product && (
          <div className={style.product}>
            <div className={style.productImg}>
              <img src={product.image.url} alt={product.title} />
            </div>
            <div className={style.productTxt}>
              <h2>{product && product.title}</h2>
              <p>Description: {product.description} </p>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        )}
        {error && <p>something went wrong</p>}
      </div> */}
    </>
  );
}

export default ProductDetails;
