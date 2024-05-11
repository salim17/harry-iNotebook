import React, { useContext, useEffect, useRef, useState } from "react";
import context from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const notesContext = useContext(context);
  const { notes, allNotes } = notesContext;
  const [eNote, setENote] = useState({etitle: "", edescription: "", etag : "default"})

  useEffect(() => {
    allNotes();
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("updatign the note ....", eNote)
  };
  const onChange = (e) => {
    /* this will update the title and description key with the values of input text,
     since they are using the same name and the javascript key*/
    setENote({ ...eNote, [e.target.name]: e.target.value });
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setENote({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  };

  const ref = useRef(null);
  return (
    <>
      <AddNote />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="etitleHelp"
                    placeholder="Enter Title"
                    onChange={onChange}
                    value={eNote.etitle}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    placeholder="Description"
                    onChange={onChange}
                    value={eNote.edescription}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tag">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    placeholder="tag"
                    onChange={onChange}
                    value={eNote.etag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note, index) => {
          return (
            <NoteItem
              note={note}
              key={index}
              updateNote={updateNote}
            ></NoteItem>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
