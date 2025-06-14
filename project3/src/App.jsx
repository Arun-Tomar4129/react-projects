import React, { useState } from "react";
import Calendar from "./Calendar";

// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // 📌 Import the CSS to make it visible

const App = () => {
  const [darkmode, SetDarkmode] = useState(true);
  const emoji = [
    { emoji: "😊", Mood: "Happy " },
    { emoji: "😐", Mood: "Normal " },
    { emoji: "😢", Mood: "Sad" },
    { emoji: "😡 ", Mood: "Angry " },
    { emoji: "😴 ", Mood: "Tired " },
  ];
  return (
    <div
      className={` h-screen w-screen ${darkmode ? "bg-gray-700 text-white" : "bg-white-200"}   `}
    >
      <div className="flex justify-center">
        <h1 className="text-[40px] font-bold text-center ">Mood Tracker</h1>
        <button
          onClick={() => SetDarkmode(!darkmode)}
          className={`border-2 border-gray-500 rounded-2xl p-2.5 m-2`}
        >
          {darkmode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        
      </div>
      <div className="h-[150px] border-2 w-full border-gray-200 rounded-2xl m-2 wrap-normal">
        <h1
          className="text-[25px] text-center
         font-bold"
        >
          How are you feeling today...
        </h1>
        <div className="flex  text-center justify-center items-cernter gap-6">
          {emoji.map((mood, index) => {
            return (
              <ul key={index} className="m-2 ">
                <li className="text-4xl">{mood.emoji}</li>
                <li>{mood.Mood}</li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="border-2 border-gray-200 rounded m-2">
        <h1 className="text-[20px] ml-7">Calender</h1>
        <div >
         <Calendar/>
          
        </div>
      </div>
    </div>
  );
};

export default App;
