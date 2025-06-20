import React ,{useState} from 'react'

const Result = ({darkmode}) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <div className={`text-center mt-4 `}>
      <label className="font-bold mr-2">Select Month:</label>
      <select
        className={`p-2 border rounded`}
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option value="" disabled>Select a month</option>
        {months.map((month, index) => (
          <option key={index} value={month} >{month}</option>
        ))}
      </select>

      {selectedMonth && (
        <p className={`mt-4 text-lg font-semibold ${darkmode ? 'text-white':'text-gray-500'}`}>
          You selected: {selectedMonth }
        </p>
      )}
    </div>
  );
};

export default Result;
