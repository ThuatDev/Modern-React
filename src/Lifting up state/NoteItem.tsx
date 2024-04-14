import React from "react";

interface NoteItemProps {
  note: string;
  onDelete: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete }) => {
  return (
    <li>
      {note}
      <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded m-4"
      >
        Delete
      </button>
    </li>
  );
};

export default NoteItem;
