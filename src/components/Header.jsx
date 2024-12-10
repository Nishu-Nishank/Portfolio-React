import React, { useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navList = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Experience', url: '#experience' },
    { name: 'Skills', url: '#skills' },
    { name: 'Contact', url: '#contact' },
  ];

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="flex border-b h-16 justify-between sticky top-0 backdrop-blur-sm bg-white/30">
      <a
        href="#home"
        className="pl-6 flex items-center text-[#286dab] no-underline text-[28px] pointer hover:scale-110 duration-300"
      >
        Nishu Nishank
      </a>
      <div className="lg:mr-10 md:mr-5 flex space-x-8 items-center">
        {navList.map((item, index) => (
          <div key={index} className="w-auto hidden md:block group">
            <a className="navigation" href={item.url}>
              {item.name}
            </a>
            <div className="h-1 border-b-2 border-[#42A5F5] duration-300 group-hover:block hidden" />
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
            className="w-6 h-6 relative"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {show && (
            <div className="absolute top-4 right-0 w-[120px] pl-2 bg-[#286dab] py-2 rounded-[4px]">
              {navList.map((item, index) => (
                <div key={index} className="w-auto flex justify-between">
                  <div>
                    <a className="navigation text-white" href={item.url}>
                      {item.name}
                    </a>
                    <div className="border-b-3 h-1 border-[#42A5F5] duration-300 group-hover:block hidden" />
                  </div>
                  {index === 0 && (
                    <svg
                      onClick={toggle}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 mr-2 text-white"
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
