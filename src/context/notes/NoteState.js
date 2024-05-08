import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const notesInitial = [
    {
      "_id": "66316a444142f9585e4d2d06",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-04-30T22:01:40.915Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284fd6",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284fd6",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284fd6",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284fd6",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284fd6",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    },
    {
      "_id": "663558d9b0806ba838284fd6",
      "user": "662d6b116ae37036bd97e26c",
      "title": "aadhar card",
      "description": "707397638363882",
      "tag": "id",
      "date": "2024-05-03T21:36:25.691Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{notes, setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
