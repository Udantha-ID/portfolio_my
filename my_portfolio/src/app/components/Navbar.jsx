import Link from 'next/link';
import Image from 'next/image';

import logo from './../assets/Udantha.png'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-800 text-white">
      <Link href="/" className="flex items-center">
        <Image 
          src={logo} 
          alt="Logo" 
          className="object-contain" 
          width={160} 
          height={50} 
        /> 
        <p className="text-white text-[18px] font-bold cursor-pointer ml-4">
          Udantha &nbsp;
          <span className="sm:block hidden"> | Full Stack Developer</span>
        </p>
      </Link>
      <div className="flex gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/project" className="hover:underline">
          Project
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
