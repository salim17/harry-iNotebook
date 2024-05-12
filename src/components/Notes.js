import React, { useContext, useEffect, useRef, useState } from "react";
import context from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const {showAlert} = props;
  const notesContext = useContext(context);
  const { notes, allNotes, editNote } = notesContext;
  const [eNote, setENote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });
  const ref = useRef(null);
  const refClose = useRef(null);

  let navigate = useNavigate();

  useEffect(() => {
    console.log("Token:", localStorage.getItem("token"));
    if(localStorage.getItem("token")) {
      allNotes()
    } else {
      console.log("Navigating to login");
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    // e.preventDefault(); // not required as this method is used on a button which is not a part of the form
    editNote(eNote.id, eNote.etitle, eNote.edescription, eNote.etag);
    refClose.current.click();
    props.showAlert("Updated successfully!", "success");
  };
  const onChange = (e) => {
    /* this will update the title and description key with the values of input text,
     since they are using the same name and the javascript key*/
    setENote({ ...eNote, [e.target.name]: e.target.value });
  };

  const updateNote = (currentNote) => {
    ref.current.click();
    setENote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  return (
    <>
      <AddNote showAlert={showAlert} />
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
                    placeholder="Enter Title"
                    onChange={onChange}
                    value={eNote.etitle}
                    minLength={5}
                    required
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
                    minLength={5}
                    required
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
                ref={refClose}
              >
                Close
              </button>
              <button
                disabled={
                  eNote.etitle.length < 5 || eNote.edescription.length < 5
                }
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map && notes.map((note, index) => {
          return (
            <NoteItem
              note={note}
              key={index}
              updateNote={updateNote}
              showAlert={showAlert}
            ></NoteItem>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
