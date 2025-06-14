import React, { useState } from "react";
import html2canvas from "html2canvas";
import './App.css';

// html2canvas is a JavaScript library that takes screenshots of webpages
// It renders HTML elements to a canvas so you can save them as an image

const gadgets = [
  { id: 1, name: "Smart Mirror", icon: "🪞" },
  { id: 2, name: "AI Speaker", icon: "🔊" },
  { id: 3, name: "Smart AC", icon: "❄️" },
  { id: 4, name: "Work Desk", icon: "🧑‍💻" },
  { id: 5, name: "LED Bed", icon: "🛎️" },
];

const SmartRoom = () => {
  const [roomItems, setRoomItems] = useState([]);
  const [theme, setTheme] = useState("modern");

  const addToRoom = (item) => {
    if (!roomItems.find((r) => r.id === item.id)) {
      setRoomItems([...roomItems, item]);
    }
  };

  const removeFromRoom = (id) => {
    setRoomItems(roomItems.filter((item) => item.id !== id));
  };

  const exportAsImage = () => {
    const element = document.getElementById("room-view");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "my_smartroom.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  const themeColors = {
    modern: "bg-white",
    cozy: "bg-yellow-50",
    tech: "bg-gray-900 text-white",
  };

  return (
    <div className={`flex flex-col md:flex-row min-h-screen p-4 gap-6 ${themeColors[theme]}`}>
      {/* Sidebar */}
      <div className="w-full md:w-1/3 bg-white rounded-xl shadow-xl p-4">
        <h2 className="text-xl font-bold mb-4">Available Gadgets</h2>
        <ul className="space-y-2">
          {gadgets.map((gadget) => (
            <li
              key={gadget.id}
              className="cursor-pointer p-2 rounded bg-blue-100 hover:bg-blue-200"
              onClick={() => addToRoom(gadget)}
            >
              ➕ {gadget.name}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Themes</h2>
          <select
            className="w-full p-2 border rounded"
            onChange={(e) => setTheme(e.target.value)}
            value={theme}
          >
            <option value="modern">Modern</option>
            <option value="cozy">Cozy</option>
            <option value="tech">Tech-Lab</option>
          </select>
        </div>

        <button
          onClick={exportAsImage}
          className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          📸 Export Room as Image
        </button>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">✅ Features</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>📸 Export Room as Image</li>
            <li>❌ Remove Gadget by clicking</li>
            <li>🖼️ Emoji Icons with Gadgets</li>
            <li>🎨 Choose from 3 Themes</li>
            <li>💻 Fully Responsive Layout</li>
          </ul>
        </div>
      </div>

      {/* Room View */}
      <div id="room-view" className="flex-1 bg-white rounded-xl shadow-xl p-4">
        <h2 className="text-xl font-bold mb-4">Your Smart Room</h2>
        {roomItems.length === 0 ? (
          <p className="text-gray-500">Click gadgets to add to your room.</p>
        ) : (
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {roomItems.map((item) => (
              <li
                key={item.id}
                className="bg-green-100 p-3 rounded shadow text-center font-medium cursor-pointer hover:bg-red-100"
                onClick={() => removeFromRoom(item.id)}
              >
                {item.icon} {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SmartRoom;
