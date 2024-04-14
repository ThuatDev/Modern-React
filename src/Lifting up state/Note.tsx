import React, { useState } from "react";
import NoteList from "./NoteList";

const Note: React.FC = () => {
  const [notes, setNotes] = useState<string[]>(["Note 1", "Note 2", "Note 3"]);

  const deleteNote = (index: number) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div>
      <h1>My Note App</h1>
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
};

export default Note;
