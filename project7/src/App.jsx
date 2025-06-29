import React, { useState, useEffect } from "react";
import Notes from "./Notes";
import NoteList from "./NoteList";

const App = () => {
  const [box, setBox] = useState(false);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const toggleBox = () => {
    setBox(!box);
  };

  const addNote = (newNote) => {
    setNotes([newNote, ...notes]);
    setBox(false);
  };
  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  const editNote = (index) => {
    const toEdit = notes[index];
    const newText = prompt("Edit Note:", toEdit.text);
    if (newText !== null) {
      const updatedNotes = [...notes];
      updatedNotes[index].text = newText;
      setNotes(updatedNotes);
    }
  };

  return (
    <div className="relative">
      <div>
        <h1 className="text-center h-[50px] items-center bg-gradient-to-l from-blue-300 via-blue-400 to-indigo-600 flex justify-center font-extrabold shadow-lg shadow-blue-300">
          Notes Writer
        </h1>
      </div>

      <div
        className="w-[150px] h-[30px] bg-blue-100 m-2 absolute left-1/2 -translate-x-1/2 text-center rounded-2xl shadow-lg shadow-gray-300 cursor-pointer "
        onClick={toggleBox}
      >
        ➕ Create Note
      </div>

      {box && <Notes Box={toggleBox} onCreate={addNote} />}
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
};

export default App;
