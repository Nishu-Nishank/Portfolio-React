import React, { useState } from "react";

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const [projects] = useState([
    {
      id: 1,
      title: "Lead Frontend Engineer",
      company: "4flow India",
      duration: "09/2025 - Present",
      durationColor: "text-green-500",
      highlights: [
        "Designed and developed independent micro-frontend applications for Transport Management, Inventory Management, and Business Insights, seamlessly integrated into the unified Optier platform",
        "Delivered supply chain solutions reducing loss rates from 20% to 3% through proactive inventory tracking and early deviation detection",
        "Developed analytics application enabling users to create interactive charts, dashboards, and statistical reports across multiple domains",
        "Integrated AI-powered chatbot into Business Insights application, reducing manual dashboard configuration effort by up to 80%",
        "Implemented automated unit, integration, and end-to-end testing with Playwright-based regression coverage and CI/CD pipelines",
        "Conducted concurrent-user load testing using k6, identifying performance bottlenecks across infrastructure layers for targeted optimizations",
      ],
      techStack: ["Vue 3", "TypeScript", "JavaScript", "Tailwind CSS", "PrimeVue", "REST APIs", "Playwright", "k6", "AWS S3", "CloudFront", "Git"],
      icon: "🚀",
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      company: "Hero MotoCorp Limited",
      duration: "11/2023 - 08/2025",
      durationColor: "text-blue-500",
      highlights: [
        "Architected and developed a BackOffice web application from scratch using ReactJs, Vite, Redux-Saga, Tailwind CSS, and MUI, achieving 50% automation of internal processes",
        "Implemented advanced map modules for real-time vehicle tracking with historical playback capabilities, enabling comprehensive fleet monitoring",
        "Developed alert tracking system for critical events (sudden braking, acceleration) with detailed fuel, speed, and timestamp analytics",
        "Enhanced user experience with live vehicle location viewing and route replay features for advanced fleet management",
        "Collaborated effectively with Product Managers, Backend Teams, and QA to ensure seamless integration and high-quality delivery",
      ],
      techStack: ["HTML5", "CSS3", "TypeScript", "React", "Redux Toolkit", "Redux-Saga", "Tailwind CSS", "Material UI"],
      icon: "🚗",
    },
    {
      id: 3,
      title: "Member Of Technical Staff - 2",
      company: "Blowhorn",
      duration: "03/2022 - 10/2023",
      durationColor: "text-purple-500",
      highlights: [
        "Revamped existing interfaces to improve usability and visual consistency, contributing to 40% increase in demand from existing and new clients",
        "Developed route-configuration and fleet-overview modules using Google Maps, markers, and autocomplete",
        "Built fleet discovery and filtering by location, hub, vehicle type, and driver",
        "Integrated Razorpay and Paytm payment gateways for wallet top-ups and transaction history",
        "Collaborated on API integration, debugging, and responsive UI improvements across multiple screens",
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue", "Nuxt", "Redux Toolkit", "Material UI", "PrimeVue", "Tailwind CSS", "Google Maps APIs"],
      icon: "🎯",
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Profinch Solution Pvt Ltd",
      duration: "02/2019 - 02/2022",
      durationColor: "text-orange-500",
      highlights: [
        "Created reusable modules and setup scripts that improved team productivity by 50% and reduced development time and costs by 30%",
        "Developed banking-app alert subscriptions for push notifications, in-app messages, email, and SMS",
        "Integrated REST APIs and resolved UI defects across multiple screens to improve stability and user experience",
        "Collaborated with stakeholders and backend teams for seamless API integration and requirement alignment",
      ],
      techStack: ["JavaScript", "React", "Redux", "SCSS", "HTML5", "CSS3", "Knockout.js", "Oracle JET", "Material UI", "REST APIs"],
      icon: "🏦",
    },
  ]);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="experience" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center pb-4 font-bold bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] bg-clip-text text-transparent mb-2">
          Work Experience
        </h2>
        <p className="text-center text-gray-600 mb-16">
          7+ years of driving impact across diverse tech companies
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#42A5F5] to-[#1e5a96]" />

          {projects.map((project, index) => (
            <div key={project.id} className="mb-12 md:mb-16">
              <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div
                    onClick={() => toggleExpand(project.id)}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-l-4 border-[#42A5F5] hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl">{project.icon}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-[#1e5a96]">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-lg font-semibold text-gray-700">{project.company}</p>
                      </div>
                      <svg
                        className={`w-6 h-6 text-[#42A5F5] transition-transform duration-300 ${expandedId === project.id ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>

                    <p className={`text-sm font-semibold mb-4 ${project.durationColor}`}>
                      📅 {project.duration}
                    </p>

                    {/* Expandable content */}
                    <div
                      className={`overflow-y-auto transition-all duration-300 ${
                        expandedId === project.id ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      <ul className="space-y-2 mb-4 text-gray-700 pr-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <span className="text-[#42A5F5] font-bold mt-1">✓</span>
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Tech Stack:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gradient-to-r from-[#42A5F5]/20 to-[#1e5a96]/20 text-[#1e5a96] px-3 py-1 rounded-full font-semibold hover:from-[#42A5F5]/40 hover:to-[#1e5a96]/40 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot - Desktop only */}
                <div className="hidden md:flex justify-center w-full md:w-auto my-8 md:my-0">
                  <div className="relative">
                    <div className="w-6 h-6 bg-white border-4 border-[#42A5F5] rounded-full z-10 relative" />
                    <div className="absolute inset-0 bg-[#42A5F5] rounded-full animate-pulse" style={{ opacity: 0.2 }} />
                  </div>
                </div>

                {/* Empty space for layout */}
                <div className="hidden md:block w-full md:w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { label: "Total Experience", value: "7+ Years", color: "from-blue-500 to-cyan-500" },
            { label: "Companies", value: "4+", color: "from-purple-500 to-pink-500" },
            { label: "Technologies", value: "20+", color: "from-green-500 to-teal-500" },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.color} text-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <p className="text-3xl font-bold mb-2">{item.value}</p>
              <p className="font-semibold text-white/90">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
