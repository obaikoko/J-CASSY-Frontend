import { Provider } from 'react-redux';
import { store } from '@/features/app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

import Layout from '@/components/Layout';


export default function App({ Component, pageProps }) {


  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </Provider>
  );
}
