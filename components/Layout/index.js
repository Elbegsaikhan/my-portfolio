import React from 'react';
import Header from '@/components/Include/Header';
import Footer from '@/components/Include/Footer';

function index({ children }) {
  return (
    <>
      <div className="noise"></div>
      <main className=" h-screen   ">
        {/* <Header /> */}
        <div className="w-full ">{children}</div>
        <div data-aos="fade-up" className="fixed bottom-0 left-0  ">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default index;
