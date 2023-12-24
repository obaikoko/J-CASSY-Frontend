import React from 'react';
import style from '../styles/showcase.module.css';
import Link from 'next/link';

function Showcase() {
  return (
    <>
      <section className={`${style.sections} ${style.sectionA}`}>
        <div className={style.sectionInner}>
          <h4>J cassy Shoes</h4>
          <h2>Collection</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>view shoes</span>
          </Link>
        </div>
      </section>
      <section className={`${style.sections} ${style.sectionC}`}>
        <div className={style.sectionInner}>
          <h4>J cassy bags</h4>
          <h2>Collection</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>view bags</span>
          </Link>
        </div>
      </section>
      <section className={`${style.sections} ${style.sectionB}`}>
        <div className={style.sectionInner}>
          <h4>J cassy bags</h4>
          <h2>Collection</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>view bags</span>
          </Link>
        </div>
      </section>
      <section className={`${style.sections} ${style.sectionE}`}>
        <div className={style.sectionInner}>
          <h4>J cassy shirts</h4>
          <h2>Collection</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>view shirts</span>
          </Link>
        </div>
      </section>
      <section className={`${style.sections} ${style.sectionD}`}>
        <div className={style.sectionInner}>
          <h4>J cassy bags</h4>
          <h2>Collection</h2>
          <Link className={style.btn} href='#'>
            <div className={style.hover}></div>
            <span>view bags</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Showcase;
