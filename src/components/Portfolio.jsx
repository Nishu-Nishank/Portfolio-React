import React from "react";
import Github from "../assets/git.svg";
import Linkedin from "../assets/linkedin.svg";
import NishuImg from "../assets/nishu.png";
import Twitter from "../assets/twitter.gif";
import reactLogo from "../assets/skills/react.svg";
import typeScriptLogo from "../assets/skills/typeScript.svg";
import nextLogo from "../assets/skills/next.svg";
import vueLogo from "../assets/skills/vue.svg";
import nuxtLogo from "../assets/skills/nuxt.svg";

const Portfolio = () => {
  return (
    <div id="home" className="bg-gradient-to-b from-white via-blue-50 to-white md:py-32 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex justify-between items-center gap-12">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#42A5F5] to-[#1e5a96] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                className="w-[280px] h-[350px] rounded-3xl object-cover relative shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                src={NishuImg}
                alt="Nishu Nishank"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg md:text-xl font-medium text-gray-600 mb-2">
              Welcome, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              <span className="bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] bg-clip-text text-transparent">
                Nishu Nishank
              </span>
            </h1>

            <div className="space-y-3 mb-8">
              <p className="text-xl md:text-2xl font-semibold text-[#1e5a96]">
                Lead Frontend Engineer
              </p>
              <p className="text-lg text-gray-700">
                Building enterprise-grade web applications with modern technologies & best practices
              </p>
              <p className="text-sm md:text-base font-semibold text-[#42A5F5] bg-[#42A5F5]/10 px-4 py-2 rounded-full inline-block">
                🌍 Open to Global Opportunities | Willing to Relocate Worldwide
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center">
                <span className="px-4 py-2 bg-[#42A5F5]/20 text-[#1e5a96] rounded-full font-semibold text-sm flex items-center gap-2">
                  <img src={reactLogo} alt="React" className="w-4 h-4" /> React Expert
                </span>
                <span className="px-4 py-2 bg-[#42A5F5]/20 text-[#1e5a96] rounded-full font-semibold text-sm flex items-center gap-2">
                  <img src={typeScriptLogo} alt="TypeScript" className="w-4 h-4" /> TypeScript
                </span>
                <span className="px-4 py-2 bg-[#42A5F5]/20 text-[#1e5a96] rounded-full font-semibold text-sm flex items-center gap-2">
                  <img src={nextLogo} alt="Next.js" className="w-4 h-4" /> Next.js
                </span>
                <span className="px-4 py-2 bg-[#42A5F5]/20 text-[#1e5a96] rounded-full font-semibold text-sm flex items-center gap-2">
                  <img src={vueLogo} alt="Vue" className="w-4 h-4" /> Vue 3
                </span>
                <span className="px-4 py-2 bg-[#42A5F5]/20 text-[#1e5a96] rounded-full font-semibold text-sm flex items-center gap-2">
                  <img src={nuxtLogo} alt="Nuxt" className="w-4 h-4" /> Nuxt.js
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-8">
              <a
                href="https://drive.google.com/file/d/1Zw-xQZyYE9kjP5RNYkIiBE2Lwhh46Uc1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] text-white font-bold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 inline-block text-center"
              >
                📄 Download Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-[#42A5F5] text-[#1e5a96] font-bold rounded-lg hover:bg-[#42A5F5]/10 transition-all duration-300"
              >
                💬 Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start items-center">
              <span className="text-gray-600 font-semibold">Connect with me:</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Nishu-Nishank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200"
                  title="GitHub"
                >
                  <img src={Github} alt="Github" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nishu-nishank/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200"
                  title="LinkedIn"
                >
                  <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/nishunishank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200"
                  title="Twitter"
                >
                  <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#42A5F5]">7+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#42A5F5]">50+</p>
                <p className="text-sm text-gray-600">Projects Built</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#42A5F5]">20+</p>
                <p className="text-sm text-gray-600">Tech Skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
