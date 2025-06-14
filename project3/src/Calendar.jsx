import React from 'react'

const Calendar = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = new Date();
  return (



  <div className="rounded-4xl border-2 m-2 border-gray-400 border-gray">
    <h2 className='text-center'> {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}</h2>
    <div className="grid grid-cols-7 gap-2 ">
      {days.map((day) => (
        <div className="font-bold text-center ">{day}</div>
      ))}
      {[...Array(30).keys()].map((day) => (
        <div className="text-center">{day + 1}</div>
      ))}
    </div>
    </div>

);

}

export default Calendar;
