import Video from '@/components/Video';
import style from '../styles/showcase.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Showcase() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

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


     useEffect(() => {
       const interval = setInterval(() => {
         setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
       }, 10000); 

       return () => clearInterval(interval);
     }, [testimonials.length]);


  return (
    <>
      <section className={`${style.sections} ${style.sectionA}`}>
        <div className={style.sectionInner}>
          <h4>Discount</h4>
          <h2>33% off on every purchase</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>view gallery</span>
          </Link>
        </div>
      </section>
      <section className={style.newArrivalsSection}>
        <h1>New Arrivals</h1>
        <div className={style.newArrivalBg}>
          <div className={style.newArrivalsContainer}>
            <div className={style.newArrival}>
              <div className={style.newArrivalImg}>
                <img
                  src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703634625/J-Cassy/zxamzmwpvkwj3eflmlnw.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className={style.newArrival}>
              <div className={style.newArrivalImg}>
                <img
                  src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703633412/J-Cassy/skoinfk5hcuqn7hjumkw.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className={style.newArrival}>
              <div className={style.newArrivalImg}>
                <img
                  src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703633023/J-Cassy/ltmjiweekcupmp7nom49.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className={style.newArrival}>
              <div className={style.newArrivalImg}>
                <img
                  src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703633252/J-Cassy/n9cxw9eqfu7q2sktasiv.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.sections} ${style.sectionC}`}>
        <div className={style.sectionInner}>
          <h4>locally produced</h4>
          <h2>Best Quality hand made products</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>view hand made products</span>
          </Link>
        </div>
      </section>
      <section className={`${style.sections} ${style.sectionB}`}>
        <div className={style.sectionInner}>
          <h4>Pure leather</h4>
          <h2>Crafted from best quality leather</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>view leather materials</span>
          </Link>
        </div>
      </section>

      <section className={`${style.sections} ${style.sectionE}`}>
        <div className={style.sectionInner}>
          <h4>Men clothings</h4>
          <h2>All kinds of wears for men</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>view men wears</span>
          </Link>
        </div>
      </section>
      <section className={style.testimonialSection}>
        <h1>Testimonials</h1>
        <div className={style.testimonialContainer}>
          <div className={style.progressBar}></div>
          <div className={style.quote}></div>
          <p id='testimonial' className={style.testimonial}>
            {testimonials[currentTestimonial].text}
          </p>
          <div className={style.user}>
            <img
              id='photo'
              className={style.userImage}
              src={testimonials[currentTestimonial].photo}
              alt=''
            />
            <div className={style.userDetails}>
              <h4 id='name' className={style.name}>
                {testimonials[currentTestimonial].name}
              </h4>
              <p id='role' className={style.role}>
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.sections} ${style.sectionD}`}>
        <div className={style.sectionInner}>
          <h4>carton materials</h4>
          <h2>made from carton</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>carton products</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Showcase;
