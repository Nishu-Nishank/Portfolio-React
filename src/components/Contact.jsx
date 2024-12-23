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
        "service_vtiadkj", // Replace with your EmailJS Service ID
        "template_09agjrh", // Replace with your EmailJS Template ID
        form.current,
        "LUBKBKA1LBJIJUAMI" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "bottom-center",
            autoClose: 3000,
          });
          //alert("Message Sent Successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Failed to Send Message, Try Again.");
          console.log(error.text);
        }
      );

    e.target.reset(); // Optional: reset the form after submission
  };

  return (
    <div id="contact">
      <ToastContainer />
      <p className="text-3xl text-center pb-5 mt-20 font-bold">Contact</p>
      <div className="md:py-16 py-8 md:flex justify-evenly items-center px-6">
        <div>
          <p className="text-[#b37d4e] text-3xl font-black">Have an idea?</p>
          <p className="text-[#286dab] text-xl font-bold pt-2">
            Let's Connect!!
          </p>
          <div className="pt-8 space-y-4">
            <div className="flex space-x-2 items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="About_icon__1B8FN h-5 w-5 bg-[#f2f2f2]"
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
                className="About_icon__1B8FN"
                height="1.3em"
                width="1.3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"></path>
              </svg>
              <p className="text-[#b37d4e]">+91 9738912315</p>
            </div>
            <div className="flex space-x-2 mt-4">
              <a
                href="https://github.com/Nishu-Nishank"
                className="w-12 h-12 flip duration-500"
              >
                <Git />
              </a>
              <a
                href="https://www.linkedin.com/in/nishu-nishank/"
                className="w-12 h-12 flip duration-500"
              >
                <Linkedin />
              </a>
              <a href="https://twitter.com/nishunishank" className="w-12 h-12">
                <img src={Twitter} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="pt-4">Name</div>
            <div>
              <input
                type="text"
                name="from_name"
                className="bg-[#f2f2f2] border md:w-[320px] w-[280px] h-9 mt-1 rounded-md"
                required
              />
            </div>
            <div className="pt-4">Email</div>
            <div>
              <input
                type="email"
                name="from_email"
                className="bg-[#f2f2f2] border md:w-[320px] w-[280px] h-9 mt-1 rounded-md"
                required
              />
            </div>
            <div className="pt-4">Message</div>
            <div>
              <textarea
                name="message"
                cols="36"
                rows="5"
                className="bg-[#f2f2f2] border mt-1 rounded-md md:w-[320px] w-[280px]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#286dab] px-6 py-1 text-center text-white rounded-lg mt-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#f2f2f2] py-10 text-center text-[#286dab]">
        <p>© 2024 Developed by Nishu Nishank</p>
      </div>
    </div>
  );
};

export default Contact;
