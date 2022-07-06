import React, { useRef } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b4jjvdn",
        "template_v42xtit",
        form.current,
        "HwDmgmD6mVKau6850"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast.success("message has been sent", {
              autoClose: 2000,
            });
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="pt-32 pb-44">
      <div className="max-w-[990px] mx-auto w-full bg-[#F7F7FB] flex justify-between">
        <div className="py-10 pl-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-10">
            <div className="flex">
              <AiOutlineMail size={24} />
              <div className="ml-5">
                <h5 className="text-sm font-semibold">Mail</h5>
                <p className="text-lg font-semibold">andredwi93@gmail.com</p>
              </div>
            </div>
            <div className="flex mt-8">
              <AiOutlinePhone size={24} />
              <div className="ml-5">
                <h5 className="text-sm font-semibold">Phone</h5>
                <p className="text-lg font-semibold">085233755399</p>
              </div>
            </div>
            <div className="flex mt-8">
              <AiOutlineLinkedin size={24} />
              <div className="ml-5">
                <h5 className="text-sm font-semibold">LInkedIn</h5>
                <a
                  href="https://www.linkedin.com/in/andriansyah-dwi-5634a1131/"
                  target="_blank"
                  className="text-lg font-semibold"
                  rel="noreferrer"
                >
                  Andriansyah Dwi
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-px h-auto bg-[#E8E8FB]"></div>
        <div className="p-10 pl-0 w-1/2">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="name"
                required
                className="bg-transparent border border-gray-600 rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="email"
                required
                className="bg-transparent border border-gray-600 rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="from_subject"
                id="subject"
                required
                className="bg-transparent border border-gray-600 rounded w-full p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="h-20 bg-transparent border border-gray-600 rounded w-full p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-8 py-2 rounded hover:bg-transparent hover:border hover:border-black hover:text-black ease-in duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
