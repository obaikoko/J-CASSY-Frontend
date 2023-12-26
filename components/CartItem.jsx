import { useDispatch, useSelector } from 'react-redux';
import style from '../styles/cart.module.css';
import Link from 'next/link';

import { removeFromCart } from '@/src/features/cart/cartSlice';
import { decreaseCartQty } from '@/src/features/cart/cartSlice';
import { addToCart } from '@/src/features/cart/cartSlice';

function CartItem({ product }) {
  const dispatch = useDispatch();

  const removeItemFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const reduceItemQuantity = (product) => {
    dispatch(decreaseCartQty(product));
  };
  const increaseItemQuantity = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section className={style.cartItems}>
      <div className={style.cartContainer}>
        <div className={style.cartItem}>
          <ul>
            <li className={style.cartImg}>
              <Link href={`products/${product._id}`}>
                <img src={product.image.url} alt={product.name} />
              </Link>
            </li>
            <li>{product.title}</li>
            <li>
              <div className={style.cartQty}>
                <button
                  className={style.cartQtyBtn}
                  onClick={() => reduceItemQuantity(product)}
                >
                  -
                </button>
                {product.cartQuantity}
                <button
                  className={style.cartQtyBtn}
                  onClick={() => increaseItemQuantity(product)}
                >
                  +
                </button>
              </div>
            </li>
            <li>${product.price}</li>
            <li>${product.price * product.cartQuantity}</li>
          </ul>
        </div>
      </div>
      <button
        className={style.cartRemoveBtn}
        onClick={() => removeItemFromCart(product)}
      >
        Remove
      </button>
    </section>
  );
}

export default CartItem;
