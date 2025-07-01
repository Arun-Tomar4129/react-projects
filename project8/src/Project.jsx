import React, { useEffect, useState } from 'react';

const Project = () => {
  const projectData = [
    { src: 'projects/project1.png', project: 'Project 1', title: 'To-Do Task App' },
    { src: 'projects/project2.png', project: 'Project 2', title: 'Smart Room' },
    { src: 'projects/project3.png', project: 'Project 3', title: 'Mood Tracker App' },
    { src: 'projects/project4.png', project: 'Project 4', title: 'Text Convert to Speech' },
    { src: 'projects/project5.png', project: 'Project 5', title: 'Color Mixer' },
    { src: 'projects/project6.png', project: 'Project 6', title: 'Student List From Server' },
    { src: 'projects/project7.png', project: 'Project 7', title: 'Notes Writer' },
  ];

  const [visibleCards, setVisibleCards] = useState([]);

  
  useEffect(() => {
    projectData.forEach((_, i) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, i]);
      }, i * 100); // 100ms delay between each
    });
  }, []);

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200">
      <h1 className="text-2xl font-bold mb-8 text-center lg:text-5xl">My Projects</h1>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectData.map((project, i) => (
          <div
            key={i}
            className={`bg-blue-100 p-4 rounded-lg shadow-md text-center transition-all duration-700 ease-out transform 
              ${visibleCards.includes(i) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
              hover:shadow-2xl hover:scale-105`}
          >
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h2 className="font-semibold text-lg">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.project}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
