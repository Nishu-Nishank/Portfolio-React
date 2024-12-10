import React, { useState } from "react";

const Experience = () => {
  const [projects] = useState([
    {
      content: (
        <div>
          <p className="text-xl font-bold">
            Senior Frontend Developer (Hero MotoCorp Limited)
          </p>
          <p className="italic text-teal-500 ">11/2023 - Present,</p>
          <p className="italic text-teal-500">Achievements/Tasks</p>
          <ul style={{ listStyleType: "disc" }} className="text-lg">
            <li className="py-1">
              Developed BackOffice web application from scratch using ReactJs,
              Vite for fast build setup, Redux-Saga for managing side effects,
              Tailwind CSS for styling, and MUI (Material-UI) for UI components
              can result in a highly responsive, well-organized application to
              automate internal processes by almost 50%.
            </li>
            <li className="py-1">
              Collaborated with Product Managers to maintain alignment with
              project plans and timelines, ensuring consistent tracking and
              adherence to the overall schedule. <br />
              Coordinated with Backend Development Teams to clarify and address
              backend dependencies, facilitating a seamless integration process
              across both front-end and back-end elements of the project.
              <br />
              Worked Closely with QA (Quality Assurance) teams to test newly
              developed pages and modules, promptly addressing issues to
              maintain high-quality standards and minimize development
              bottlenecks.
            </li>
            <li className="py-1">
              Developed and integrated plenty of modules including map modules
              for real-time vehicle tracking and historical playback, enabling
              users to monitor vehicle movements directly on a map interface.
              <br /> Implemented alert tracking for sudden braking, acceleration
              events, and other critical notifications, enhancing driver safety
              insights with detailed fuel, speed, date & time stamps.
              <br /> Enhanced user experience with features for viewing live
              vehicle locations and replaying historical routes, providing
              comprehensive fleet management tools for monitoring and analyzing
              vehicle behavior over time.
            </li>
            <li className="py-1 font-semibold">
              Tech Stack:- HTML5, CSS3, TypeScript, React Js , Redux toolkit
              with saga, Tailwind CSS, Material UI.
            </li>
          </ul>
        </div>
      ),
      id: 1,
    },
    {
      content: (
        <div>
          <p className="text-xl font-bold">
            Member Of Technical Staff - 2 (Blowhorn)
          </p>
          <p className="italic text-teal-500 ">03/2022 - Present,</p>
          <p className="italic text-teal-500">Achievements/Tasks</p>
          <ul style={{ listStyleType: "disc" }} className="text-lg">
            <li className="py-1">
              Migrated & Developed new design for an existing UI of a product to
              look more user friendly and attractive, which results in increased
              demand by 40% by existing and new clients in the market.
            </li>
            <li className="py-1">
              Contributed to project architecture to improve the development
              process and remove the dependency between teams, so everyone can
              work parallel without depending on each other.
            </li>
            <li className="py-1">
              Developed Routes Conﬁguration & ﬂeet overview module with Google
              Map, Marker and Google Autocomplete from scratch which assigns
              routes to the drivers for delivering products and to list the
              available ﬂeet in selected location, hub, vehicle type and driver
              name.
            </li>
            <li className="py-1">
              Developed Wallet module with razorPay and paytm payment gateway
              integration. where user can add money to their wallet using
              multiple payment gateway options, and also can view the credit and
              debit amount along with multiple details.
            </li>
            <li className="py-1 font-semibold">
              Tech Stack:- HTML5, CSS3, Javascript, Vue Js , Nuxt js, Tailwind
              css, PrimeVue.
            </li>
          </ul>
        </div>
      ),
      id: 1,
    },
    {
      content: (
        <div>
          <p className="text-xl font-bold">
            Software Engineer (Profinch Solution Pvt Ltd)
          </p>
          <p className="italic text-teal-500 ">02/2019 - 03/2022,</p>
          <p className="italic text-teal-500">Achievements/Tasks</p>
          <ul style={{ listStyleType: "disc" }} className="text-lg">
            <li className="py-1">
              Developed setups scripts & Reusable Modules, resulting in
              increased productivity by 50% and reduced development time and
              cost by 30%.
            </li>
            <li className="py-1">
              Developed new module for introducing new features like Group
              corporate alert subscription and User alert Subscription for Users
              in Banking web application. where corporate and retail users can
              subscribe an multiple alerts like push notiﬁcation,on screen,
              email & sms alerts for particular account number for any
              transaction. which enhanced security by 50%.
            </li>
            <li className="py-1">
              Worked on API integration, debugging, bug Fixing for various UI
              screens. which enhanced the performance of application.
            </li>
            <li className="py-1">
              Meeting with Clients for Project Requirement Analysis and
              Planning, so we can set a timeline and scope for the project.
            </li>
            <li className="py-1">
              Provide Technical knowledge for the project with 100% client
              satisfaction.
            </li>
            <li className="py-1 font-semibold">
              Tech Stack:- Tech Stack:- HTML5, CSS3, Javascript, ReactJs,
              KnockoutJs, Material UI
            </li>
          </ul>
        </div>
      ),
      id: 2,
    },
  ]);

  return (
    <div id="experience" className="my-10">
      <p className="text-3xl text-center md:py-16 py-8 pb-5 font-bold">
        WORK EXPERIENCE
      </p>
      {projects.map((item, index) => (
        <div
          key={item.id}
          className={`md:flex ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
        >
          <div
            className={`flex items-center justify-center w-full md:w-1/2 ${
              index !== projects.length - 1
                ? "border-b border-[#286dab] md:border-b-0"
                : ""
            }`}
          >
            <div className="lg:px-16 px-8 py-4">
              <p>{item.content}</p>
            </div>
          </div>
          <div
            className={`relative overflow-hidden z-10 md:block hidden ${
              index % 2 === 0 ? "right-5" : ""
            }`}
          >
            <div className="bg-white border-[3px] border-gray-400 rounded-full w-5 h-5"></div>
            <div className="absolute top-5 left-2 h-full border-l-[3px] border-gray-400"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
