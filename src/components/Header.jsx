import React from 'react'

const Header = () => {
  return (
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-28 py-4 bg-cream  border-b-2 border-black  z-10">
          <div className="text-3xl font-bold">
              <a href="/">Ceramiza</a>
          </div>
          <div className="flex gap-14 font-medium">
              <a href="/products">PRODUCTS</a>
              <a href="/faq">FAQ</a>
              <a href="/contact-us">CONTACT US</a>
          </div>
      </div>
  );
}

export default Header