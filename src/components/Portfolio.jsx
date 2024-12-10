import React from "react";
import Github from "../assets/git.svg";
import Linkedin from "../assets/linkedin.svg";
import NishuImg from "../assets/nishu.png";
import Twitter from "../assets/twitter.gif";

const Portfolio = () => {
  return (
    <div id="home" className="md:flex justify-evenly md:py-28 py-8 animate">
      <div className="flex justify-center items-center md:pt-0 pt-5">
        <img
          className="w-[250px] h-[300px] rounded-2xl"
          src={NishuImg}
          alt="Nishu Nishank"
        />
      </div>
      <div className="flex justify-center items-center md:pt-0 pt-5">
        <div className="px-4">
          <p className="text-2xl font-semibold text-center md:text-start">
            Hi, I am
          </p>
          <p className="text-[28px] text-[#286dab] font-semibold text-center md:text-start">
            Nishu Nishank
          </p>
          <p className="text-sm font-bold text-center text-[#b37d4e] mt-4">
            Senior Frontend Developer | Competitive programmer
          </p>
          <div className="flex md:block justify-center">
            <div className="mt-4">
              <button className="bg-[#286dab] text-sm flex items-center justify-center px-4 py-1 text-white rounded-md hover:scale-110 duration-300 mx-auto md:mx-0">
                <a
                  href="https://drive.google.com/file/d/1JMaD6hedIat4IZEQXQzr26eLwxWRx43u/view?usp=drive_link"
                  type="application/pdf"
                  rel="alternate"
                  media="print"
                  target="_blank"
                  className="text-white"
                >
                  RESUME
                </a>
              </button>
              <div className="flex space-x-2 mt-4">
                <a
                  href="https://github.com/Nishu-Nishank"
                  className="w-12 h-12 flip duration-500"
                >
                  <img src={Github} alt="Github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nishu-nishank/"
                  className="w-[44px] h-[44px] flip duration-500"
                >
                  <img src={Linkedin} alt="LinkedIn" />
                </a>
                <a
                  href="https://twitter.com/nishunishank"
                  className="w-12 h-12 flip duration-500"
                >
                  <img src={Twitter} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
