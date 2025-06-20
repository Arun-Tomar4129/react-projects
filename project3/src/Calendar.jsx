import React from 'react';

const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();

  return (
    <div className="rounded-4xl border-2 m-2 border-gray-400">
      <h2 className="text-center text-2xl font-bold underline">
        {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div key={day} className="font-bold text-center">
            {day}
          </div>
        ))}
        {[...Array(30).keys()].map((day) => {
          const today = date.getDate();
          const currentDate = day + 1;
          const isToday = currentDate === today;

          return (
            <div
              key={currentDate}
              className={`text-center p-2 rounded-full ${
                isToday ? "bg-blue-500 text-white font-bold" : ""
              }`}
            >
              {currentDate}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
