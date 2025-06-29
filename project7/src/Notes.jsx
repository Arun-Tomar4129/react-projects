import React, { useState } from 'react';

const Notes = ({ Box, onCreate }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const colors = [
    "#8A2BE2", "#87CEEB", "#008080", "#FF7F50", "#DAA520",
    "#FF6347", "#32CD32", "#FF69B4", "#778899", "#40E0D0",
    "#9370DB", "#FA8072", "#D2691E", "#FF1493", "#5F9EA0",
  ];

  const handleAdd = () => {
    if (!text.trim() || !title.trim()) return;
    const note = {
      title,
      text,
      color: colors[Math.floor(Math.random() * colors.length)],
      date: new Date().toLocaleDateString(),
    };
    onCreate(note);
    setText("");
    setTitle("");
  };

  return (
    <div className='w-[400px] h-[300px] bg-blue-400 rounded-2xl flex justify-center items-center flex-col gap-2 p-2 absolute left-1/2 -translate-x-1/2 text-center mt-3 z-10 '>
      <input
        type="text"
        placeholder='Enter Title..'
        className='text-center w-[90%] bg-blue-200 font-extrabold'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        name="text"
        id="notes"
        className='h-[70%] w-[90%] bg-blue-300 resize-none text-center'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="flex gap-2">
        <button
          className='w-[100px] bg-gradient-to-b from-red-300 via-blue-400 to-blue-500 hover:from-red-500 hover:to-blue-300 duration-200 transition rounded'
          onClick={handleAdd}
        >
          Create
        </button>
        <button
          className='w-[100px] bg-gradient-to-b from-red-300 via-blue-400 to-blue-500 hover:from-red-500 hover:to-blue-300 duration-200 transition rounded'
          onClick={Box}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Notes;
