import React from "react";
import NoteItem from "./NoteItem";

interface NoteListProps {
  notes: string[];
  onDeleteNote: (index: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDeleteNote }) => {
  return (
    <div className="shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">My Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <NoteItem
            key={index}
            note={note}
            onDelete={() => onDeleteNote(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
