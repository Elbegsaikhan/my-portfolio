import React from 'react';
import Header from '@/components/Include/Header';
import Footer from '@/components/Include/Footer';

function index({ children }) {
  return (
    <main className="flex h-screen flex-col items-start justify-between">
      {/* <Header /> */}
      <div>{children}</div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </main>
  );
}

export default index;
