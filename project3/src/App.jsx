import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import Result from "./Result";

// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // 📌 Import the CSS to make it visible

const App = () => {
  const [darkmode, SetDarkmode] = useState(true);
  const [UrMood, setUrMood] = useState("your mood ..");
  const [selectMood, setSelecteMood] = useState(null);
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const emoji = [
    { emoji: "😊", Mood: "Happy " },
    { emoji: "😐", Mood: "Normal " },
    { emoji: "😢", Mood: "Sad" },
    { emoji: "😡 ", Mood: "Angry " },
    { emoji: "😴 ", Mood: "Tired " },
  ];
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className={` h-screen w-full ${
        darkmode ? "bg-gray-700 text-white" : "bg-white-200"
      }   `}
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
                <li
                  onClick={() => {
                    if (!IsSubmitted) {
                      setUrMood(`${mood.emoji} ${mood.Mood}`);
                      setSelecteMood(mood); // ✅ This line fixes your issue
                    }
                  }}
                  className={`text-4xl cursor-pointer hover:scale-110 transition ${
                    UrMood === `${mood.emoji} ${mood.Mood}`
                      ? " border-2 border-blue-500 rounded-full p-2"
                      : ""
                  } ${IsSubmitted ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {mood.emoji}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      <div className="border-2 border-gray-200 rounded-3xl m-2">
        <h1 className="text-[20px] ml-7">Calender</h1>
        <div>
          <Calendar />
        </div>
      </div>
      <div className=" text-xl font-bold flex justify-center mr-2">
        📅 Today is: {formattedDate} :<p className="ml-2"> {UrMood}</p>
      </div>
      <button
        onClick={() => {
          if (!selectMood) {
            alert("please select mood");
          } else {
            setIsSubmitted(true);
          }
        }}
        className={`border-2 rounded-[10px] px-4 py-2 block mx-auto ${
          darkmode ? "bg-white border-black text-gray-800 " : "bg-gray-300"
        } ${IsSubmitted ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Submit
      </button>
      <div>
        <Result darkmode={darkmode} />
      </div>
    </div>
  );
};

export default App;
