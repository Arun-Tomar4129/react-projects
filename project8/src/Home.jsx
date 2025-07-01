import React from "react";

const Home = () => {
  return (
    <div className="p-4 space-y-4 h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200">
      <div className="block sm:hidden">
        <div className="w-full max-w-[300px] aspect-square mx-auto  text-black rounded-lg shadow-lg flex flex-col items-center justify-center text-center p-4">
          <img
            src="images/myimage.jpg"
            alt="Arun Tomar"
            className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-indigo-400"
          />
          <p className="text-sm font-medium ">
            Hi, I’m Arun Tomar, a passionate BCA student from TMU with a strong interest in web development and artificial intelligence
          </p>
        </div>
      </div>

      <div className="hidden sm:flex w-full bg-blue-200 rounded-l-full items-center shadow-md p-4">
        <div className="w-[190px] h-[190px] rounded-full bg-amber-200 border-2 m-2 shadow-lg overflow-hidden flex-shrink-0">
          <img
            className="w-full h-full object-cover"
            src="images/myimage.jpg"
            alt="Arun Tomar"
          />
        </div>
        <p className="w-full text-center text-[16px] sm:text-[18px] md:text-[20px] font-serif font-medium leading-relaxed mt-4 sm:mt-0">
          Hi, I’m <strong>Arun Tomar</strong>, a passionate BCA student from TMU
          with a strong interest in <strong>web development</strong> and{" "}
          <strong>artificial intelligence</strong>. I enjoy building creative
          and functional projects using technologies like{" "}
          <strong>JavaScript</strong>, <strong>React.js</strong>, and{" "}
          <strong>Tailwind CSS</strong>. I’m constantly learning and
          experimenting to improve my skills. Alongside web development, I’m
          exploring the world of AI and plan to combine both fields to solve
          real-world problems. My goal is to grow as a developer, build smart
          applications, and contribute to impactful tech innovations.
        </p>
      </div>

      <div className="p-4 rounded-md flex justify-center gap-4 flex-wrap">
        {[{ Title: " My projects" }, { Title: " My Resume" }].map((user, i) => (
          <div
            key={i}
            className="sm:w-[300px] sm:h-[80px] lg:w-[500px] lg:h-[120px] bg-gradient-to-b from-blue-300 via-indigo-300 to-sky-400 shadow-sm rounded-full flex lg:text-5xl lg:font-extrabold items-center justify-center hover:shadow-lg hover:shadow-blue-700 transition duration-200"
          >
            {user.Title}
          </div>
        ))}
      </div>

      <div className="p-4 rounded-md shadow-md">
        <h1 className="lg:text-[45px] sm:text-2xl font-semibold text-center underline mb-4">
          Connect with me
        </h1>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-x-10">
          {[
            {
              src: "images/instagram.png",
              alt: "Instagram",
              link: "https://www.instagram.com/mr.at7_4129/?__pwa=1",
            },
            {
              src: "images/facebook.png",
              alt: "Facebook",
              link: "https://www.facebook.com/arun.rajput.875745",
            },
            {
              src: "images/github.png",
              alt: "GitHub",
              link: "https://github.com/Arun-Tomar4129",
            },
            {
              src: "images/linkdin.png",
              alt: "LinkedIn",
              link: "https://www.linkedin.com/in/arun-tomar-at7/",
            },
            {
              src: "images/twitter.png",
              alt: "Twitter",
              link: "https://x.com/Arun4129",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="w-16 h-16 sm:w-[90px] sm:h-[90px] hover:scale-110 transition-transform duration-200"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;