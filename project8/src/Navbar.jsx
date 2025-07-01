import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const messages = [" Arun Tomar", " Developer", " Coder"];

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentText = messages[index];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
      } else {
        setText(currentText.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <nav className="bg-gradient-to-r from-indigo-400 via-cyan-500 to-blue-500 text-white px-6 py-3 shadow-md relative">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold hidden sm:block">Arun-Tomar.com</h1>

        <div className="text-center text-lg sm:text-xl font-semibold font-mono">
          <span>I am {text}</span>
          <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </div>

        <div className="hidden sm:flex gap-4">
          <Link to="/" className="hover:text-yellow-200 font-medium">
            Home
          </Link>
          <Link to="/project" className="hover:text-yellow-200 font-medium">
            Project
          </Link>
          <Link to="/About" className="hover:text-yellow-200 font-medium">
            About
          </Link>
        </div>

        <button
          className="sm:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-2 flex flex-col gap-2 bg-white text-black rounded shadow p-4 absolute text-center top-full right-0 w-[60%] z-10">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500"
          >
            Home
          </Link>
          <hr />
          <Link
            to="/project"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500"
          >
            Project
          </Link>
          <hr />
          <Link
            to="/About"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500"
          >
            About
          </Link>
          <hr />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
