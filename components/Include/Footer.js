import Link from 'next/link';
import React from 'react';

const links = [
  { name: 'home', url: '/' },
  { name: 'about', url: '/about' },
  { name: 'email', url: '/email' },
  { name: 'gihub', url: '/url' },
  { name: 'instagram', url: '' },
  { name: 'linkedin', url: '' },
];

export default function Footer() {
  return (
    <>
      <div className="flex w-full items-end justify-between p-24 md:w-fit">
        <div className=" mr-24 hidden flex-col md:flex">
          <h2 className="w-[200px] break-normal font-hkgroteskRegular">
            Ulaanbaatar, Mongolia.
          </h2>
          <h1 className="w-2100px] break-normal font-hkgroteskSemi ">
            Elbegsaikhan Amgalan
          </h1>
        </div>
        <div className="grid w-full grid-flow-col grid-rows-2 gap-x-24 gap-y-2  xl:grid-rows-3">
          {links?.map((link, index) => (
            <div
              key={index}
              className={' col-span-1  flex items-center justify-start'}
            >
              <p>0{index} </p>{' '}
              <h1 className="ml-1 cursor-pointer font-hkgroteskSemi text-base text-[#1A00ED]">
                <Link href={link.url}>{link.name}</Link>
              </h1>
            </div>
          ))}
        </div>
        <div className="absolute bottom-10 font-hkgroteskRegular text-xs">
          <div>
            Copyright © 2022 Elbegsaikhan Amgalan. All rights reserved.{' '}
          </div>
        </div>
      </div>
    </>
  );
}
