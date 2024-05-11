import React, { useContext } from "react";
import context from "../context/notes/noteContext";

const NoteItem = (props) => {
  const notesContext = useContext(context);
  const { deleteNote } = notesContext;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
            <i className="fa-solid fa-pencil mx-2" onClick={() => updateNote(note)}></i>
          </div>
          <p className="card-text">
            {note.description} Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Eveniet esse alias exercitationem minus quo
            dolore, adipisci veniam rem velit dolor quisquam labore quos,
            voluptas similique saepe eius magni inventore quod?
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
