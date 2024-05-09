import React, { useContext, useEffect } from "react";
import context from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const notesContext = useContext(context);
  const { notes, allNotes } = notesContext;

  useEffect(() => {
    allNotes();
  }, [])

  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note, index) => {
          return <NoteItem note={note} key={index}></NoteItem>;
        })}
      </div>
    </>
  );
};

export default Notes;
