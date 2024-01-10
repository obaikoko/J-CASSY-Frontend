import Navbar from './Navbar';

import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import { useState, useEffect } from 'react';
import Footer from './Footer';
function Layout({ children }) {
  const user = useSelector((state) => state.auth.user);
  const [isLoggedIn, setIsLoggedIn] = useState('');

  useEffect(() => {
    setIsLoggedIn(user);
  }, [user]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
