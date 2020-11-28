import '../styles/styles.css';

import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <body className="flex flex-col min-h-screen ">
      <Head>
        <title>Chore Watch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className=" bg-blue-500 flex flex-row justify-between h-16 items-center">
        <h1 className="p-5 font-bold tracking-widest text-gray-100">
          <Link href="/">{`Chore Watch`.toUpperCase()}</Link>
        </h1>
        <div className="py-5 text-gray-100">
          <Link href="/signup">
            <a className="px-5">Sign Up</a>
          </Link>
          <Link href="/login">
            <a className="px-5">Log In</a>
          </Link>
          <Link href="/about">
            <a className="px-5">About</a>
          </Link>
          <Link href="/pricing">
            <a className="px-5">Pricing</a>
          </Link>
        </div>
      </nav>
      <main className="flex-grow flex flex-col justify-center">
        <Component {...pageProps} />
      </main>
      <footer className="h-40 bg-blue-500 px-5 py-5 text-gray-100">
        <div className="flex flex-col items-start flex-wrap h-full">
          <Link href="/about">
            <a className="my-2">About</a>
          </Link>
          <Link href="/about">
            <a className="my-2">About</a>
          </Link>
          <Link href="/about">
            <a className="my-2  ">About</a>
          </Link>
          <Link href="/about">
            <a className="my-2  ">About</a>
          </Link>
        </div>
      </footer>
    </body>
  );
}

export default MyApp;
