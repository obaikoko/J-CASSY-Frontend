import Dashboard from '@/components/Dashboard';
import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';  
import AdminLayout from '@/components/AdminLayout';

function admin() {
  const user = useSelector((state) => state.auth.user);
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const navigate = useRouter();

  useEffect(() => {
    if (!user) {
      navigate.push('/');
    }
    setIsLoggedIn(user);
  }, [user]);

  return (
    <>
      {isLoggedIn && isLoggedIn.role == 'Admin' ? (
        <>
          <AdminLayout />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default admin;
