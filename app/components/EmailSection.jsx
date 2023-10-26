import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="contact" >
      <div className="">

      </div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am currently looking for new oppurtunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try y best to
          get back to you!
        </p>
        <div className="socials flex flex-row gap-3">
          <Link href={"/"}>
            <Image
              src={"/icons/github.png"}
              alt="Github Icon"
              width={35}
              height={35}
              className="opacity-70 hover:opacity-100"
            />
          </Link>

          <Link href={"/"}>
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
        <form className="flex flex-col mt-10 md:mt-0 gap-6">
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
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 font-medium text-white py-2.5 px-5 hover:bg-green-600 rounded-lg w-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
