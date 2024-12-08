import Link from "next/link";
import React from "react";
import { ImHeart } from "react-icons/im";
const Contact = () => {
  return (
    <footer className="my-12 py-4 flex flex-col justify-between items-center ">
      <h1 className="text-center text-lg md:text-7xl font-normal  text-white">
        Ready to work together?
      </h1>

      <h2 className="text-white font-bold p-4 my-12 text-center">
        Reach out to me and let's discuss how I can help you achieve your goals
      </h2>
      <Link href={"mailto:khaledfrayji7@gmail.com"} className="">
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Let's Connect
        </div>
      </button>
      </Link>
      <h4 className="text-center text-white flex gap-2 pt-12">Made with <ImHeart /> by GDG</h4>
    </footer>
  );
};

export default Contact;
