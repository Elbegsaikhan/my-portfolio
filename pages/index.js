import Head from 'next/head';
import Image from 'next/image';
import Letter from '@/components/Letter';

const letters = ['web.', 'mobile.', 'photography.'];
export default function Home() {
  return (
    <>
      <div className="relative w-full  p-16">
        {letters?.map((l, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-duration={`${(index + 1) * 2}50`}
          >
            <Letter text={l} />
          </div>
        ))}
      </div>
    </>
  );
}
