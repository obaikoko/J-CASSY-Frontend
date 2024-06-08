import Head from 'next/head';
import Showcase from '../components/Showcase';

export default function Home() {
  return (
    <>
      <Head>
        <title>J CASSY</title>
      </Head>
      <main>
        <Showcase />
      </main>
    </>
  );
}
