import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const allNotes = async () => {
    // API call
    console.log("Fetching all notes");
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZDZiMTE2YWUzNzAzNmJkOTdlMjZjIn0sImlhdCI6MTcxNDc3MjIyMX0.xguNqVID9wQ3zs4vmbKppzNsYGoTmsPZfHZfby4gYRo",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    console.log("Adding a new note");
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZDZiMTE2YWUzNzAzNmJkOTdlMjZjIn0sImlhdCI6MTcxNDUxNDQ3MH0.DMD78eYCINCMFBmTfNr3KyChqbA-xG5sKUszCRFT5WY",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    let note = {
      title: title,
      description: description,
      tag: tag,
    };
    setNotes(notes.concat(note));
    allNotes();
  };

  // Delete a Note
  const deleteNote = async (id) => {
    console.log("Deleting the note with Id: " + id);
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZDZiMTE2YWUzNzAzNmJkOTdlMjZjIn0sImlhdCI6MTcxNDc3MjIyMX0.xguNqVID9wQ3zs4vmbKppzNsYGoTmsPZfHZfby4gYRo",
      },
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZDZiMTE2YWUzNzAzNmJkOTdlMjZjIn0sImlhdCI6MTcxNDc3MjIyMX0.xguNqVID9wQ3zs4vmbKppzNsYGoTmsPZfHZfby4gYRo",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    // <NoteContext.Provider value={{notes: notes, setNotes: setNotes}}>{props.children}</NoteContext.Provider>
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, allNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
