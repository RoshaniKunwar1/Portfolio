import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMail } from "react-icons/cg";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    setShow(!show);
  };

  return (
    <nav className="bg-black mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center lg-w-1/4">
        <p className="font-semibold text-2xl">My_Portfolio</p>
      </div>

      <div
        className={`${show ? "flex flex-col mt-5 overflow-hidden transition-all" : "hidden"
          } absolute top-14 items-end pe-[35px] w-full text-white text-lg p-4 lg:static lg:flex md:flex-row lg:items-center  lg:gap-4 lg:w-2/4`}
      >
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-500" : "")}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-yellow-500" : "")}>
          About
        </NavLink>
        <NavLink to="/technologies" className={({ isActive }) => (isActive ? "text-yellow-500" : "")}>
          Technology
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-yellow-500" : "")}>
          Projects
        </NavLink>
        <NavLink to="/education" className={({ isActive }) => (isActive ? "text-yellow-500" : "")}>
          Education
        </NavLink>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white lg:w-1/4">
        <a href="https://roshaniKunwar4008@gmail.com" target="_blank" rel="noopener noreferrer">
          <CgMail className="text-3xl" />
        </a>
        <a href="https://www.linkedin.com/in/roshani-kunwar-915809282" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/RoshaniKunwar1" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
      </div>

      <div className="lg:hidden">
        <button
          onClick={handleButtonToggle}
          aria-label="Toggle menu"
          className="text-white text-2xl"
        >
          <GiHamburgerMenu className={`${(show ? "animate-bounce transition-all text-yellow-500" : "")}`} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
