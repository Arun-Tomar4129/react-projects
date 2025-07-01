import React, { useEffect, useState } from "react";

const skills = {
  Languages: [
    { label: "HTML", value: 80 },
    { label: "CSS", value: 60 },
    { label: "JavaScript", value: 70 },
    { label: "Tailwind", value: 65 },
    { label: "Python", value: 45 },
    { label: "C", value: 50 },
    { label: "C++", value: 50 },
  ],
  Tools: [
    { label: "Git", value: 80 },
    { label: "GitHub", value: 85 },
    { label: "VS Code", value: 90 },
    { label: "React", value: 75 },
    { label: "Linux", value: 30 },
  ],
};

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div
      className={`p-6 bg-indigo-200 sm:p-10 max-w-5xl mx-auto transition-all duration-1000 ease-in-out ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center underline text-blue-800">
        About Me
      </h1>

      {/* My Interest Section */}
      <div className="shadow-xl bg-blue-200 rounded-md p-5 mb-10 transition hover:shadow-blue-300">
        <h2 className="text-2xl font-semibold text-purple-700 mb-2">My Interests</h2>
        <p className="text-[16px] sm:text-[18px] leading-relaxed text-gray-700">
          I'm deeply passionate about <strong>Frontend Development</strong> and the growing field of 
          <strong> Artificial Intelligence</strong>. My vision is to build powerful and beautiful user interfaces 
          and integrate them with intelligent, generative AI systems. I love turning ideas into digital experiences 
          that solve real problems and spark innovation.
        </p>
      </div>

      {/* Languages Section */}
      <div className="mb-12 bg-blue-200 p-5 rounded shadow-md hover:shadow-blue-300 transition">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Languages</h2>
        <div className="space-y-4">
          {skills.Languages.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-4"
            >
              <label className="w-28 font-medium">{item.label}</label>
              <input
                type="range"
                value={item.value}
                readOnly
                className="w-full accent-blue-500"
              />
              <span className="w-10 text-right text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className=" p-5 rounded bg-blue-200 shadow-md hover:shadow-purple-300 transition">
        <h2 className="text-2xl font-semibold text-purple-600 mb-6 text-center">Tools & Technologies</h2>
        <div className="space-y-4">
          {skills.Tools.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-4"
            >
              <label className="w-28 font-medium">{item.label}</label>
              <input
                type="range"
                value={item.value}
                readOnly
                className="w-full accent-purple-500"
              />
              <span className="w-10 text-right text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
