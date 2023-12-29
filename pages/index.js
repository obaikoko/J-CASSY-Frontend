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

   const testimonials = [
     {
       name: 'Sophia Johnson',
       role: 'Fashion Blogger',
       photo: 'https://randomuser.me/api/portraits/women/1.jpg',
       text: "J CASSY is a fashion paradise! The quality and style of their collection are unparalleled. I'm constantly impressed by their attention to detail and unique designs. Shopping here is an absolute delight!",
     },
     {
       name: 'Ethan Rodriguez',
       role: 'Stylist',
       photo: 'https://randomuser.me/api/portraits/men/2.jpg',
       text: "Working with J CASSY has been a dream! Their pieces are versatile and always on-trend. The website's ease of navigation and their commitment to quality make it a go-to for fashion enthusiasts.",
     },
     {
       name: 'Isabella Smith',
       role: 'Model',
       photo: 'https://randomuser.me/api/portraits/women/3.jpg',
       text: "J CASSY is my ultimate fashion haven! The range of styles caters to various tastes, and their customer service is exceptional. I'm a huge fan of their pieces; they never disappoint!",
     },
     {
       name: 'Liam Thompson',
       role: 'Fashion Designer',
       photo: 'https://randomuser.me/api/portraits/men/4.jpg',
       text: "I love the creativity behind J CASSY's designs. As a designer myself, I find inspiration in their unique pieces. Their dedication to quality craftsmanship shines through in every item.",
     },
     {
       name: 'Ava Clark',
       role: 'Fashion Enthusiast',
       photo: 'https://randomuser.me/api/portraits/women/5.jpg',
       text: 'J CASSY is my go-to for both casual and elegant wear! Their collection is diverse, and I always find something perfect for any occasion. The quality is unbeatable!',
     },
     {
       name: 'Noah Evans',
       role: 'Style Consultant',
       photo: 'https://randomuser.me/api/portraits/men/6.jpg',
       text: "J CASSY's attention to detail sets them apart. Each piece feels carefully curated, and the website's interface makes shopping a breeze. Their commitment to excellence is evident in every purchase.",
     },
     {
       name: 'Olivia Baker',
       role: 'Fashion Influencer',
       photo: 'https://randomuser.me/api/portraits/women/7.jpg',
       text: "I adore J CASSY! Their pieces always elevate my style game. The quality and range of designs make it easy to find something unique for any look. It's a must-visit for fashion-forward individuals!",
     },
   ];
  
  return (
    <>
      <Head>
        <title>J CASSY</title>
      </Head>
      <main>
        <Showcase testimonials ={testimonials} /> 
      </main>
    </>
  );
}
