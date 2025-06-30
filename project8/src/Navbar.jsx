import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const messages = [" Arun Tomar", " Developer", " Coder"];

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
        setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % messages.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <nav className="h-[60px] bg-gradient-to-r from-indigo-400 via-cyan-500 to-blue-500 text-white flex justify-between items-center px-6 shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-bold">Arun-Tomar.com</h1>

      {/* Typing Animation Text */}
      <div className="text-center text-lg sm:text-xl font-semibold font-mono">
        <span>I am {text}</span>
        <span className="border-r-2 border-white animate-pulse ml-1"></span>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <Link to="/" className="hover:text-yellow-200 font-medium">Home</Link>
        <Link to="/project" className="hover:text-yellow-200 font-medium">Project</Link>
        <Link to="/About" className="hover:text-yellow-200 font-medium">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
