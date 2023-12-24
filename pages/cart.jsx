import CartItem from '@/components/CartItem';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, getTotal } from '@/src/features/cart/cartSlice';
import style from '../styles/cart.module.css';

function cart() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState('');
  const [cartTotalAmount, setCartTotalAmount] = useState('');
  const goods = useSelector((state) => state.cart.cartItem);
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
    setProducts(goods);
    setCartTotalAmount(totalAmount);
  }, [goods, totalAmount]);

  const onClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className={style.cart}>
      <div className={style.cartBg}></div>
      <h2>SHOPPING CART</h2>
      <div className={style.cartHeader}>
        <ul>
          <li>image</li>
          <li>name</li>
          <li>qty</li>
          <li>price</li>
          <li>amount</li>
        </ul>
      </div>

      <div>
        {products && products.length < 1 ? (
          <div className='mt-4 p-4'>
            <h1 className='text-center'>no Product in the cart</h1>
          </div>
        ) : (
          <>
            {products &&
              products.map((product) => (
                <CartItem key={product._id} product={product} />
              ))}
            <div className={style.checkout}>
              <button className={style.cartCheckoutBtn} onClick={onClick}>
                Clear Cart
              </button>
              <div className='subTotal'>
                <div className={style.checkoutSubtotal}>
                  <h3>Total Items</h3>
                  <h3>{products.length}</h3>
                </div>
                <div className={style.checkoutSubtotal}>
                  <h3>Total Amount:</h3>
                  <h3>${cartTotalAmount}</h3>
                </div>
                <p>Amount for total products in the cart</p>
                <button className={style.checkoutBtn}>check out</button>
              </div>
            </div>

            {/* <div className='d-md-flex justify-content-between'>
              <button className='btn btn-danger h-25 mb-4  ' onClick={onClick}>
                Clear Cart
              </button>
              <div className='subTotal'>
                <div className='total d-flex justify-content-between'>
                  <h5>Total Items</h5>
                  <p>{products.length}</p>
                </div>
                <div className='total d-flex justify-content-between'>
                  <h3>Subtotal</h3>
                  <h3>${cartTotalAmount}</h3>
                </div>
                <p>Amount for total products in the cart</p>
                <button className='btn btn-success '>check out</button>
              </div>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}

export default cart;
