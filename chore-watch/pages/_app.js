import '../styles/styles.css';

import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  // const { isLoading, error, data } = useQuery('getCurrentUser', () =>
  //   axios('/users/', {
  //     method: 'get',
  //     baseURL: 'http://localhost:4000/api/',
  //   }).then((res) => console.log(res))
  // );
  // console.log(data);
  let loggedIn = false;
  return (
    <body className="flex flex-col min-h-screen ">
      <Head>
        <title>Chore Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loggedIn ? (
        <Nav>
          <Link href="/">
            <a className="px-5 py-2">Dashboard</a>
          </Link>
          <Link href="/account">
            <a className="px-5 py-2">Account</a>
          </Link>
          <Link href="/logout">
            <a className="px-5 py-2">Log Out</a>
          </Link>
        </Nav>
      ) : (
        <Nav>
          <Link href="/signup">
            <a className="px-5 py-2">Sign Up</a>
          </Link>
          <Link href="/pricing">
            <a className="px-5 py-2">Pricing</a>
          </Link>
          <Link href="/about">
            <a className="px-5 py-2">About</a>
          </Link>
          <Link href="/login">
            <a className="px-5 py-2">Log In</a>
          </Link>
        </Nav>
      )}
      <main className="flex-grow flex flex-col justify-center">
        <Component {...pageProps} />
      </main>
      <Footer />
    </body>
  );
}

export default MyApp;
