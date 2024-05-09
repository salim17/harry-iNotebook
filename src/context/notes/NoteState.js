import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "66316a444142f9585e41d2d06",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-04-30T22:01:40.915Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba8382824fd6",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba8382843fd6",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284f4d6",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284fd56",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284fd66",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284f99d67",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title, description, tag) => {
    //TODO Api call
    console.log("Adding a new note");
    let note = {
      "_id": "663558d9b0806ba83828674fd6",
      "user": "662d6b116ae37036bd97e26c",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  // Delete a Note
  const deleteNote = (id) => {
    console.log("Deleting the note with Id: " + id);
    //TODO Api call
    const newNotes = notes.filter((note) => {return note._id !== id});
    setNotes(newNotes);
  }
  // Edit a Note
  const editNote = () => {

  }

  return (
    // <NoteContext.Provider value={{notes: notes, setNotes: setNotes}}>{props.children}</NoteContext.Provider>
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
