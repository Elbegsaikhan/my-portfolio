import React from 'react';
import Image from 'next/image';

const services = [
  'Interface Design & Prototype',
  'Frontend Development',
  'Creative Development',
  'iOS Development',
  'Accessibility Auditing',
  'Search Engine Optimization',
  'Version Control (Git)',
  'Content Management Systems (CMS)',
];
export default function about() {
  return (
    <div className="flex h-[80vh] items-center justify-center px-16">
      <div className="mx-auto grid grid-cols-4 gap-10 ">
        <div>
          <h1 className="mb-4 font-hkgroteskMedium text-2xl">
            Connoisseur of everything with an interface.
          </h1>
          <div className="font-hkgroteskRegular text-base">
            I started off as a designer before making the switch to web and
            eventually mobile development. I specialize in creating functional
            and aesthetically pleasing web and mobile experiences with a focus
            on animated, responsive, and interactive content.
            <br /> I deliver highly executed user-facing experiences both online
            and on iOS devices by paying close attention to the niceties of
            design (due to my design background), accessibility, performance and
            optimization.
            <br /> When I am not working, I love taking pictures using my camera
            or my phone or I lose myself playing video games.
          </div>
        </div>
        <div>
          <h1 className="font-hkgroteskMedium text-2xl">Services</h1>
          {services?.map((ser, index) => (
            <div key={index} className={'my-4 font-hkgroteskRegular text-base'}>
              {ser}
            </div>
          ))}
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <div className="w-fit origin-top-left rotate-6 transform p-16 shadow-md transition duration-500 ease-in-out hover:rotate-0  hover:shadow-2xl ">
            <Image
              src={'/me.jpg'}
              layout="responsive"
              width={500}
              height={500}
              alt="Elbegsaikhan Amgalan"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
