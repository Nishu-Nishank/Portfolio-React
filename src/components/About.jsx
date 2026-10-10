import React from "react";

const About = () => {
  const contactInfo = [
    {
      icon: "📍",
      label: "Location",
      value: "Bengaluru, Karnataka",
      color: "text-[#FF6B6B]",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "nishank.nishu85@gmail.com",
      href: "mailto:nishank.nishu85@gmail.com",
      color: "text-[#4ECDC4]",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9738912315",
      color: "text-[#45B7D1]",
    },
  ];

  return (
    <div id="about" className="bg-gradient-to-b from-[#f8f9fa] to-[#f2f2f2] md:py-16 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center pb-8 font-bold bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="flex justify-center mb-12">
          <div className="lg:px-0 md:px-8 px-4 text-lg text-center leading-relaxed max-w-3xl">
            <p className="mb-4">
              I'm a <span className="font-bold text-[#1e5a96]">Lead Frontend Engineer</span> with <span className="font-bold text-[#42A5F5]">7+ years</span> of proven expertise building enterprise-grade web applications across supply chain, automotive, logistics, and banking. Specialized in designing scalable UI architecture, building data-rich dashboards, and delivering high-quality solutions.
            </p>
            <p className="mb-4">
              My expertise spans <span className="font-semibold">React, Vue 3, TypeScript, Next.js, and modern web technologies</span>. I excel at leading end-to-end frontend delivery, optimizing performance, collaborating across teams, and architecting maintainable micro-frontend platforms. Hands-on with automated testing, CI/CD pipelines, AWS deployment, and k6 load testing for scalability validation.
            </p>
            <p>
              Committed to writing clean, maintainable code and creating exceptional user experiences. Experienced in developing enterprise-grade, modular Supply Chain Management (SCM) platforms. Always eager to learn and adapt to emerging technologies while mentoring junior developers.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 cursor-pointer"
            >
              <div className={`text-4xl mb-3 group-hover:scale-125 transition-transform duration-300`}>
                {info.icon}
              </div>
              <p className="text-sm text-gray-500 mb-1">{info.label}</p>
              {info.href ? (
                <a
                  href={info.href}
                  className={`font-semibold text-gray-800 hover:${info.color} transition-colors truncate`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.value}
                </a>
              ) : (
                <p className="font-semibold text-gray-800">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#42A5F5]">
          <h3 className="text-xl font-bold text-[#1e5a96] mb-4">🎯 What I Bring</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🏗️</span>
              <div>
                <p className="font-semibold text-gray-800">Scalable Architecture</p>
                <p className="text-sm text-gray-600">Micro-frontend design and enterprise-grade platform solutions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-gray-800">Performance Excellence</p>
                <p className="text-sm text-gray-600">Load testing, optimization, and scalability validation with k6</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🤝</span>
              <div>
                <p className="font-semibold text-gray-800">Leadership & Collaboration</p>
                <p className="text-sm text-gray-600">Leading cross-functional teams and mentoring junior developers</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🧪</span>
              <div>
                <p className="font-semibold text-gray-800">Quality & Testing</p>
                <p className="text-sm text-gray-600">Automated testing, CI/CD pipelines, and code quality standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
