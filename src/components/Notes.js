import React, { useContext } from "react";
import context from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

const Notes = () => {
    const notesContext = useContext(context);
    const { notes, setNotes } = notesContext;
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note, index) => {
        return <NoteItem note={note} key={index}></NoteItem>
      })}
    </div>
  );
};

export default Notes;
