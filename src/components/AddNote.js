import React, {useContext, useState} from "react";
import context from "../context/notes/noteContext";

const AddNote = () => {
    const notesContext = useContext(context);
    const { addNote } = notesContext;
    const [note, setNote] = useState({title: "", description: "", tag : ""})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""});
    }
    const onChange = (e) => {
        /* this will update the title and description key with the values of input text,
         since they are using the same name and the javascript key*/
        setNote({...note, [e.target.name]: e.target.value});
    }
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter Title"
            onChange={onChange}
            minLength={5}
            required
            value={note.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button disabled={
                  note.title.length < 5 || note.description.length < 5
                } type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
