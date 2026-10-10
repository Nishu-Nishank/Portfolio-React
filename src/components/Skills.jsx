import React, { useState } from "react";
import bootstrapSvg from "../assets/skills/bootstrap.svg";
import cssSvg from "../assets/skills/css.svg";
import htmlSvg from "../assets/skills/html.svg";
import javascriptSvg from "../assets/skills/javascript.svg";
import knockoutJsSvg from "../assets/skills/knockoutJs.png";
import materialUi from "../assets/skills/materialUi.svg";
import next from "../assets/skills/next.svg";
import nuxtSvg from "../assets/skills/nuxt.svg";
import primeVueSvg from "../assets/skills/primeVue.png";
import reactSvg from "../assets/skills/react.svg";
import reduxSvg from "../assets/skills/redux.svg";
import tailwindSvg from "../assets/skills/tailwind.svg";
import typeScript from "../assets/skills/typeScript.svg";
import vueSvg from "../assets/skills/vue.svg";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      label: "Frontend Frameworks & Libraries",
      icon: "🚀",
      skills: [
        { name: "React", url: reactSvg, level: "Expert" },
        { name: "Vue 3", url: vueSvg, level: "Advanced" },
        { name: "Next.js", url: next, level: "Advanced" },
        { name: "Nuxt.js", url: nuxtSvg, level: "Advanced" },
        { name: "Knockout.js", url: knockoutJsSvg, level: "Intermediate" },
      ],
    },
    languages: {
      label: "Languages & Core",
      icon: "💻",
      skills: [
        { name: "JavaScript (ES6+)", url: javascriptSvg, level: "Expert" },
        { name: "TypeScript", url: typeScript, level: "Advanced" },
        { name: "HTML5", url: htmlSvg, level: "Expert" },
        { name: "CSS3 & SCSS", url: cssSvg, level: "Expert" },
      ],
    },
    styling: {
      label: "Styling & UI Frameworks",
      icon: "🎨",
      skills: [
        { name: "Tailwind CSS", url: tailwindSvg, level: "Expert" },
        { name: "Material UI", url: materialUi, level: "Advanced" },
        { name: "Bootstrap", url: bootstrapSvg, level: "Advanced" },
        { name: "Prime Vue", url: primeVueSvg, level: "Advanced" },
      ],
    },
    stateManagement: {
      label: "State Management & Tools",
      icon: "⚙️",
      skills: [
        { name: "Redux Toolkit", url: reduxSvg, level: "Expert" },
        { name: "Redux-Saga", url: reduxSvg, level: "Advanced" },
        { name: "Pinia (Vue 3)", url: vueSvg, level: "Advanced" },
      ],
    },
  };

  return (
    <div id="skills" className="bg-gradient-to-b from-[#f2f2f2] to-white md:py-16 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center pb-4 font-bold bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Proficient in modern web technologies and frameworks
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? "bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] text-white shadow-lg scale-105"
                  : "bg-white text-[#1e5a96] border-2 border-[#42A5F5] hover:border-[#1e5a96]"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="group relative h-[160px] bg-white rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 cursor-pointer overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#42A5F5]/10 to-[#1e5a96]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative flex flex-col h-full justify-center items-center text-center">
                  <img
                    className="w-[70px] h-[70px] mb-2 group-hover:scale-125 transition-transform duration-300"
                    src={skill.url}
                    alt={skill.name}
                  />
                  <p className="font-bold text-gray-800 mb-1">{skill.name}</p>
                  <span className="text-xs font-semibold text-[#42A5F5] bg-[#42A5F5]/10 px-3 py-1 rounded-full">
                    {skill.level}
                  </span>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#42A5F5]">
          <h3 className="text-2xl font-bold text-[#1e5a96] mb-6">📚 Additional Skills & Knowledge</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🔗", skill: "REST APIs & Google Maps APIs" },
              { icon: "🧪", skill: "Unit & Integration Testing (Playwright)" },
              { icon: "⚡", skill: "Performance Optimization & k6 Load Testing" },
              { icon: "☁️", skill: "AWS S3 & Amazon CloudFront" },
              { icon: "📱", skill: "Responsive & Mobile-First Design" },
              { icon: "🔄", skill: "Git & Version Control (Jira, Confluence)" },
              { icon: "🚀", skill: "CI/CD Pipelines & Jenkins" },
              { icon: "📦", skill: "Module Bundling (Webpack, Vite)" },
              { icon: "🎨", skill: "Figma & Sketch Design Collaboration" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#42A5F5]/10 hover:to-[#1e5a96]/10 transition-all duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-gray-700">{item.skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { label: "Technologies Mastered", value: "15+", icon: "⭐" },
            { label: "Years of Experience", value: "7+", icon: "📅" },
            { label: "Projects Delivered", value: "50+", icon: "✅" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#42A5F5] to-[#1e5a96] text-white rounded-xl p-6 text-center shadow-lg"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-blue-100 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
