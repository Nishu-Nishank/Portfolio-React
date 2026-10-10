import emailjs from "emailjs-com";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Git } from "../assets/Git";
import { Linkedin } from "../assets/Linkedin";
import Twitter from "../assets/twitter.gif";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vtiadkj",
        "template_09agjrh",
        form.current,
        "LUBKBKA1LBJIJUAMI"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully! 🎉", {
            position: "bottom-center",
            autoClose: 3000,
          });
          console.log(result.text);
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "bottom-center",
            autoClose: 3000,
          });
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "nishank.nishu85@gmail.com",
      href: "mailto:nishank.nishu85@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91 9738912315",
      href: "tel:+919738912315",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Bengaluru, Karnataka",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div id="contact" className="bg-gradient-to-b from-white to-gray-50">
      <ToastContainer />
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-4xl md:text-5xl text-center pb-4 font-bold bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] bg-clip-text text-transparent mb-2">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Have an exciting opportunity or just want to chat? I'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#1e5a96] mb-8">Let's Connect</h3>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href || "#"}
                  target={method.href && method.href.startsWith("tel:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-3xl`}>{method.icon}</div>
                    <div>
                      <p className="text-sm text-gray-500 font-semibold">{method.label}</p>
                      <p className="text-[#1e5a96] font-bold group-hover:text-[#42A5F5] transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-r from-[#1e5a96]/10 to-[#42A5F5]/10 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-700 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Nishu-Nishank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 group-hover:border-[#42A5F5]"
                  title="GitHub"
                >
                  <Git className="w-6 h-6 group-hover:text-[#42A5F5] transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nishu-nishank/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 group-hover:border-[#42A5F5]"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-[#42A5F5] transition-colors" />
                </a>
                <a
                  href="https://twitter.com/nishunishank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 group-hover:border-[#42A5F5]"
                  title="Twitter"
                >
                  <img src={Twitter} alt="Twitter" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#42A5F5] focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/20 transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#42A5F5] focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/20 transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-[#42A5F5] focus:outline-none focus:ring-2 focus:ring-[#42A5F5]/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] text-white font-bold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#1e5a96] to-[#42A5F5] rounded-2xl p-8 text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Ready to work together?</h3>
          <p className="mb-4 text-white/90">
            Let's create something amazing. Feel free to reach out anytime!
          </p>
          <a
            href="mailto:nishank.nishu85@gmail.com"
            className="inline-block px-6 py-2 bg-white text-[#1e5a96] font-bold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Start Conversation
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 font-medium">
            © 2026 Nishu Nishank. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with <span className="text-red-500">❤️</span> using React, Tailwind CSS & modern web technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
