"use client";
import React, { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });
  const form = React.createRef();
  const [success, setSuccess] = React.useState(false);
  const [failure, setFailure] = React.useState(false);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function resetForm() {
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    emailjs
      .sendForm(
        "service_lmi5wd4",
        "template_0dykp4m",
        form.current,
        "J-nJnPiDE3gPrDh8G"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          setFailure(false);
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Your file is being uploaded!");
          setFailure(true);
        }
      );
  }

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:py-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new oppurtunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-3">
          <Link href={"https://github.com/bijeshsingha"} target="_blank">
            <Image
              src={"/icons/github.png"}
              alt="Github Icon"
              width={35}
              height={35}
              className="opacity-70 hover:opacity-100"
            />
          </Link>

          <Link href={"https://www.linkedin.com/in/bijesh-singha-89a634159/"} target="_blank">
            <Image
              src={"/icons/linkedin.png"}
              alt="Linkedin Icon"
              width={35}
              height={35}
              className="opacity-70 hover:opacity-100"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/icons/insta.png"}
              alt="insta Icon"
              width={35}
              height={35}
              className="opacity-70 hover:opacity-100"
            />
          </Link>
        </div>
      </div>
      <div>
        {!(success || failure) && (
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col mt-10 md:mt-0 gap-6"
          >
            <div>
              <label
                htmlFor="email"
                className="text-white block font-medium text-sm mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="jacob@google.com"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm
                    rounded-lg block w-full p-2.5"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-white block font-medium text-sm mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                placeholder="Just saying hi.."
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm
                    rounded-lg block w-full p-2.5"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block font-medium text-sm mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Let's talk about..."
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm
                    rounded-lg block w-full p-2.5"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 font-medium text-white py-2.5 px-5 hover:bg-green-600 rounded-lg w-full"
            >
              Send
            </button>
          </form>
        )}
        {success && (
          <div className="flex flex-col mt-10 md:mt-0 gap-6">
            <p className="text-green-500">Message sent successfully!</p>
            <button
              className="bg-green-500 font-medium text-white py-2.5 px-5 hover:bg-green-600 rounded-lg w-full"
              onClick={() => {
                resetForm();
                setSuccess(false);
              }}
            >
              New Form
            </button>
          </div>
        )}
        {failure && (
          <div className="flex flex-col mt-10 md:mt-0 gap-6">
            <p className="text-red-500">Server Error! Please try again later.</p>
            <button
              className="bg-green-500 font-medium text-white py-2.5 px-5 hover:bg-green-600 rounded-lg w-full"
              onClick={() => {
                resetForm();
                setSuccess(false);
                setFailure(false);
              }}
            >
              New Form
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
