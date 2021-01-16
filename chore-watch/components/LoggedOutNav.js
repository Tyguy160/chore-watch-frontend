import Link from 'next/link';

function LoggedOutNav({ classname }) {
  return (
    <nav className=" bg-blue-500 flex flex-row justify-between h-16 items-center">
      <h1 className="p-5 font-bold tracking-widest text-gray-100">
        <Link href="/">{`Chore Watch`.toUpperCase()}</Link>
      </h1>
      <div className="py-5 text-gray-100">
        <Link href="/signup">
          <a className="px-5">Sign Up</a>
        </Link>
        <Link href="/pricing">
          <a className="px-5">Pricing</a>
        </Link>
        <Link href="/about">
          <a className="px-5">About</a>
        </Link>
        <Link href="/login">
          <a className="px-5">Log In</a>
        </Link>
      </div>
    </nav>
  );
}

export default LoggedOutNav;
