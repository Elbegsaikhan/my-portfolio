import '../styles/index.css';
import Layout from '@/components/Layout';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
      delay: 10,
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
