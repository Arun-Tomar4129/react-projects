import React, { useState, useEffect } from "react";

const App = () => {
  const storedColors = JSON.parse(localStorage.getItem("Color")) || {
    Red: 0,
    Green: 0,
    Blue: 0,
  };
  const [showPopup, setShowPopup] = useState(false);

  const [Red, setRed] = useState(storedColors.Red);
  const [Green, setGreen] = useState(storedColors.Green);
  const [Blue, setBlue] = useState(storedColors.Blue);
  const hexColor = rgbToHex(Red, Green, Blue);

  function Mix() {
    localStorage.setItem("Color", JSON.stringify({ Red, Green, Blue }));
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  }

  useEffect(() => {
    const hex = rgbToHex(Red, Green, Blue);
    navigator.clipboard
      .writeText(hex)
      .then(() => console.log(`Copied ${hex} to clipboard`))
      .catch(() => console.log("Failed to copy"));
  }, [Red, Green, Blue]);

  function rgbToHex(Red, Green, Blue) {
    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + toHex(Red) + toHex(Green) + toHex(Blue);
  }

  return (
    <div className="h-screen bg-[#F5EEDD] w-full">
      <div className="h-[50px] bg-[#7AE2CF] flex items-center justify-center">
        <h1 className="text-[30px] font-bold font-serif">Color Mixer</h1>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-4 rounded-lg shadow-lg border-2 border-green-400 ">
            <h2 className="text-green-600 font-bold text-lg">Color Saved!</h2>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center h-[calc(100vh-50px)] gap-5">
        <p className="font-sans border-2 rounded-2xl w-[250px] text-center bg-[#077A7D] text-white">
          <strong>Red</strong>: {Red}, <strong>Green</strong>: {Green},{" "}
          <strong>Blue</strong>: {Blue}
        </p>

        <div
          className="w-[200px] h-[200px] border-[2px] rounded-2xl justify-center items-center flex"
          style={{ backgroundColor: `rgb(${Red}, ${Green}, ${Blue})` }}
        >
          <p className="text-lg font-semibold ">HEX: {hexColor}</p>
        </div>

        <div className="h-[100px] w-[200px] border-[2px] rounded-2xl pt-2 pl-2 bg-gray-400">
          <label htmlFor="red">
            <strong>Red</strong>:
          </label>
          <input
            type="range"
            id="red"
            className=" accent-red-500 slider-thumb"
            value={Red}
            onChange={(e) => setRed(Number(e.target.value))}
            min={0}
            max={255}
          />
          <br />
          <label htmlFor="green">
            <strong>Green</strong>:
          </label>
          <input
            type="range"
            id="green"
            className=" accent-green-500 slider-thumb"
            value={Green}
            onChange={(e) => setGreen(Number(e.target.value))}
            min={0}
            max={255}
          />
          <br />
          <label htmlFor="blue">
            <strong>Blue</strong>:
          </label>
          <input
            type="range"
            id="blue"
            className=" accent-blue-500 slider-thumb"
            value={Blue}
            onChange={(e) => setBlue(Number(e.target.value))}
            min={0}
            max={255}
          />
        </div>

        <button
          className="bg-gray-400 w-[60px] rounded-2xl border-2"
          onClick={Mix}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default App;
