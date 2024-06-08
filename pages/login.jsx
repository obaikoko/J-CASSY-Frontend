import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '@/features/slices/userApiSlice';
import { setCredentials } from '@/features/slices/authSlice';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Spinner from '@/components/Spinner';
import style from '../styles/login.module.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;

  const [login, { isLoading, isError }] = useLoginMutation();

  const dispatch = useDispatch();
  const router = useRouter();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      // navigate(redirect);
      router.push('/');
      toast.success(`welcome ${res.firstName}`);
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };
 
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
          {isLoading ? <Spinner /> : 'Login'}
        </button>

        <Link href='/resetPassword' className={style.btn}>
          Forgotten password ?
        </Link>
      </form>
    </div>
  );
}

export default Login;
