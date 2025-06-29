import { FaTrash, FaEdit } from "react-icons/fa";

const NoteList = ({ notes, onDelete, onEdit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4 mt-[50px]">
      {notes.map((note, index) => (
        <div
          key={index}
          className="p-4 rounded-xl shadow-md text-black font-medium break-words relative"
          style={{ backgroundColor: note.color }}
        >
          <div className="absolute top-2 right-2 flex gap-2">
            <FaEdit
              className="cursor-pointer text-blue-700 hover:scale-110 transition"
              onClick={() => onEdit(index)}
            />
            <FaTrash
              className="cursor-pointer text-red-700 hover:scale-110 transition"
              onClick={() => onDelete(index)}
            />
          </div>
          <h2 className="text-lg font-bold text-center underline">{note.title}</h2>
          <p className="mt-2">{note.text}</p>
          <p className="text-sm mt-2 italic">{note.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
