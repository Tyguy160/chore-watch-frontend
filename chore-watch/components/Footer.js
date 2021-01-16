import Link from 'next/link';

function Footer({ classname }) {
  return (
    <footer className="h-40 bg-blue-500 px-20 py-5 text-gray-100">
      <div className="flex flex-col items-start w-72 flex-wrap h-full">
        <Link href="/about">
          <a className="my-4">About</a>
        </Link>

        <a className="my-4" href="https://www.chorewatch.com/pricing">
          Pricing
        </a>

        <a className="my-4  ">Privacy Policy</a>
        <a className="my-4  ">General Terms</a>
      </div>
    </footer>
  );
}

export default Footer;
