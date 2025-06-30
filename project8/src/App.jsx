import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Project from "./Project";
import About from "./About";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    // First 2 seconds: play animation
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Small delay for exit animation (300ms)
      setTimeout(() => setShowApp(true), 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showApp && (
        <div
          className={`h-screen flex items-center justify-center flex-col 
            bg-gradient-to-br from-blue-300 via-indigo-400 to-purple-400
            text-white transition-opacity duration-700 ease-in-out
            ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          <h1 className="text-4xl sm:text-5xl font-bold animate-pulse">
            👋 Welcome to My Website
          </h1>
          <p className="text-center mt-6 mx-6 sm:text-lg text-sm max-w-xl">
            I’m <strong>Arun Tomar</strong> — passionate about building modern web experiences and AI tools.
            Please explore my projects, connect with me, and feel free to share feedback!
          </p>
        </div>
      )}

      {showApp && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
