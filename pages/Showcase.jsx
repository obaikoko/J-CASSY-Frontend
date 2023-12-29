import React from 'react';
import style from '../styles/showcase.module.css';
import Link from 'next/link';

function Showcase() {
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
          <p className={style.testimonial}>
            "J CASSY is an absolute gem in the fashion world! Their website
            offers a stunning array of trendy and elegant pieces that perfectly
            suit any style. The quality of their clothing is exceptional, and
            I'm always impressed by the attention to detail in every design. Not
            to mention, their customer service is top-notch—efficient, friendly,
            and truly dedicated to ensuring a fantastic shopping experience. I
            can't recommend J CASSY enough for anyone looking to elevate their
            wardrobe with chic and high-quality fashion pieces!"
          </p>
          <div className={style.user}>
            <img
            className={style.userImage}
              src='https://randomuser.me/api/portraits/women/46.jpg'
              alt=''
            />
            <div className={style.userDetails}>
              <h4 className={style.name}>jlkdlsdk</h4>
              <p className={style.role}>mlamlaskl</p>
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
