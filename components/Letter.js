import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Letter({ text }) {
  return (
    <div className="lg-text-7xl mb-1 cursor-pointer font-hkgroteskBold transition-all duration-1000 ease-letter-expo hover:tracking-[-10px] sm:text-6xl md:text-7xl xl:text-9xl 2xl:text-[8.5rem]">
      <Link href={`/${text}`}>
        <p>{text}</p>
      </Link>
    </div>
  );
}
