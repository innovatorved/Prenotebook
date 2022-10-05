import React, { useContext, useState } from "react";

import { NoteContext } from "../Context/notes/NoteState";
import { AlertContext } from "../Context/notes/AlertState";
import { BackContext } from "../Context/notes/BackState";

export default function AddNote() {
  const { AddNote } = useContext(NoteContext);
  const { showAlert } = useContext(AlertContext);
  const { mode } = useContext(BackContext);

  const [note, setnote] = useState({ title: "", description: "", tag: "" });
  const ChangesInNote = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  //Save Note
  const SaveNote = async (e) => {
    e.preventDefault();
    const jsonRes = await AddNote(note);
    if (jsonRes.success) {
      setnote({ title: "", description: "", tag: "" });
      showAlert("Note Added", "primary");
    } else {
      showAlert(jsonRes.error, "warning");
    }
  };
  return (
    <div className="container my-3">
      <h2
        className="fontMain"
        style={{ color: mode === "light" ? "" : "#dee4ce" }}
      >
        Create a Note
      </h2>
      <form className="my-3">
        <div className="form-group my-2">
          <label
            htmlFor="title"
            style={{ color: mode === "light" ? "" : "#dee4ce" }}
          >
            Title
          </label>
          <input
            type="text"
            style={{
              backgroundColor: mode === "light" ? "" : "#667574",
              color: mode === "light" ? "" : "white",
            }}
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={ChangesInNote}
          />
        </div>
        <div className="form-group my-2">
          <label
            htmlFor="description"
            style={{ color: mode === "light" ? "" : "#dee4ce" }}
          >
            Description
          </label>
          <textarea
            type="text"
            style={{
              backgroundColor: mode === "light" ? "" : "#667574",
              color: mode === "light" ? "" : "white",
            }}
            className="form-control"
            id="description"
            name="description"
            value={note.description}
            placeholder="Description"
            onChange={ChangesInNote}
          ></textarea>
        </div>
        <div className="form-group my-2">
          <label
            htmlFor="tag"
            style={{ color: mode === "light" ? "" : "#dee4ce" }}
          >
            Tag
          </label>
          <input
            type="text"
            style={{
              backgroundColor: mode === "light" ? "" : "#667574",
              color: mode === "light" ? "" : "white",
            }}
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            placeholder="General"
            onChange={ChangesInNote}
          />
        </div>
        <button
          type="submit"
          disabled={note.title.length < 3 || note.description.length < 10}
          className="btn btn-outline-info"
          onClick={SaveNote}
        >
          Save
        </button>
      </form>
    </div>
  );
}
