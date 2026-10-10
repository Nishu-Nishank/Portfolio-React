import React, { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navList = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' },
  ];

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="flex border-b h-16 justify-between sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-white/40 to-white/20 shadow-lg">
      <a
        href="#home"
        className="pl-6 flex items-center text-[#1e5a96] no-underline text-[28px] font-bold pointer hover:scale-110 duration-300 transition-transform"
      >
        <span className="text-gradient bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] bg-clip-text text-transparent">
          Nishu Nishank
        </span>
      </a>
      <div className="lg:mr-10 md:mr-5 flex space-x-8 items-center">
        {navList.map((item, index) => (
          <div key={index} className="w-auto hidden md:block group">
            <a
              className="navigation text-[#286dab] font-medium hover:text-[#1e5a96] transition-colors duration-300"
              href={item.url}
            >
              {item.name}
            </a>
            <div className="h-1 bg-gradient-to-r from-[#42A5F5] to-[#1e5a96] duration-300 group-hover:block hidden rounded-full" />
          </div>
        ))}
        <div className="md:hidden block cursor-pointer pr-4">
          <svg
            onClick={toggle}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 relative text-[#286dab] hover:text-[#1e5a96] transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {show && (
            <div className="absolute top-16 right-0 w-[140px] bg-gradient-to-br from-[#286dab] to-[#1e5a96] py-3 rounded-lg shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
              {navList.map((item, index) => (
                <div key={index} className="w-auto flex justify-between px-4 py-2 hover:bg-white/10 transition-colors">
                  <div>
                    <a className="navigation text-white font-medium hover:text-[#42A5F5] transition-colors" href={item.url}>
                      {item.name}
                    </a>
                  </div>
                  {index === 0 && (
                    <svg
                      onClick={toggle}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-white hover:rotate-90 transition-transform duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
