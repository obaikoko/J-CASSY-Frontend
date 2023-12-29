import style from '../styles/showcase.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Showcase({testimonials}) {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

     useEffect(() => {
       const interval = setInterval(() => {
         setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
       }, 10000); // Update every 10 seconds

       return () => clearInterval(interval);
     }, [testimonials.length]);

  let idx = 1;
  const updateTestimonial = () => {
   const {name, role, photo, text} = testimonials[idx]
  };
  // updateTestimonial()

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
        <div className={style.newArrivalsContainer}>
          <div className={style.newArrival}>
            <div className={style.newArrivalImg}>
              <img
                src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703634625/J-Cassy/zxamzmwpvkwj3eflmlnw.jpg'
                alt=''
              />
            </div>
            <Link className={style.link} href=''>
              view
            </Link>
          </div>
          <div className={style.newArrival}>
            <div className={style.newArrivalImg}>
              <img
                src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703633412/J-Cassy/skoinfk5hcuqn7hjumkw.jpg'
                alt=''
              />
            </div>
            <Link className={style.link} href=''>
              view
            </Link>
          </div>
          <div className={style.newArrival}>
            <div className={style.newArrivalImg}>
              <img
                src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703633023/J-Cassy/ltmjiweekcupmp7nom49.jpg'
                alt=''
              />
            </div>
            <Link className={style.link} href=''>
              view
            </Link>
          </div>
          <div className={style.newArrival}>
            <div className={style.newArrivalImg}>
              <img
                src='http://res.cloudinary.com/dzajrh9z7/image/upload/v1703633252/J-Cassy/n9cxw9eqfu7q2sktasiv.jpg'
                alt=''
              />
            </div>
            <Link className={style.link} href=''>
              view
            </Link>
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
