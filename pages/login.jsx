import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../src/features/auth/authSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Spinner from '@/components/Spinner';
import style from '../styles/login.module.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useRouter();

  const { user, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      dispatch(reset());
    }
    if (user || isSuccess) {
      navigate.push('/dashboard');
    }
  }, [user, isError]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };
 if (isLoading) {
   return (
     <div className={style.loading}>
       <Spinner />;
     </div>
   );
 }
  return (
    <div className={style.container}>
      <div className={style.loginBg}></div>
      <form className={style.form} onSubmit={onSubmit}>
        <h1>SIGN IN</h1>
        <div className={style.formGroup}>
          <label htmlFor='email'>Username</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <button type='submit' className={style.btn}>
          Login
        </button>
        <Link href='/resetPassword' className={style.btn}>
          Forgotten password ?
        </Link>
      </form>
    </div>
  );
}

export default Login;
