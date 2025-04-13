import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-[#f2f2f2] md:py-16 py-8">
      <p className="text-3xl text-center pb-5 font-bold">About</p>
      <div className="flex justify-center space-y-4">
        <p className="lg:px-32 md:px-16 px-8 text-lg text-center">
          Experienced{" "}
          <b className="text-[#337ab7] italic">Senior Frontend developer</b>{" "}
          with
          <b> 6.2 years </b> of expertise in crafting visually appealing,
          user-friendly websites and web applications. Proficient in HTML, CSS,
          JavaScript and TypeScript, I have a strong track record of
          transforming design concepts into seamless interfaces. Skilled in
          frontend frameworks like React and Vue.js, strong problem-solving
          abilities, collaborative mindset, and dedication to delivering
          high-quality frontend solutions. Ready to contribute to your team's
          success and exceed expectations.
        </p>
      </div>
      <div className="md:flex justify-center space-x-8 md:pt-8 pt-4 space-y-1 md:space-y-0">
        <div className="flex space-x-2 items-center pl-8 md:pl-0">
          <img
            src="../src/assets/location.gif"
            alt="location"
            className="h-5 w-5"
          />
          <p className="text-[#b37d4e]">Bengaluru, Karnataka</p>
        </div>
        <div className="flex space-x-2 items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="h-5 w-5 bg-[#f2f2f2]"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
            ></path>
          </svg>
          <a
            className="text-[#b37d4e]"
            href="mailto:nishank.nishu85@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            nishank.nishu85@gmail.com
          </a>
        </div>
        <div className="flex space-x-2 items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="h-5 w-5"
            height="1.3em"
            width="1.3em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"></path>
          </svg>
          <p className="text-[#b37d4e]">+91 9738912315</p>
        </div>
      </div>
    </div>
  );
};

export default About;
