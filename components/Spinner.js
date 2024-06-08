// src/components/Spinner.js

import style from '@/styles/spinner.module.css';

const Spinner = () => {
  return (
    <div className={style.loader}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Spinner;
