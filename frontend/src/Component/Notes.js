import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteContext } from "../Context/notes/NoteState";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import { useNavigate } from "react-router-dom";

import { BackContext } from "../Context/notes/BackState";

export default function Notes() {
  const { notes, fetchNotes } = useContext(NoteContext);
  const { mode, search } = useContext(BackContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const UpdateNote = async (EditNote) => {
    await setnote(EditNote);
    await ref.current.click();
  };

  return (
    <>
      <AddNote />
      <input
        type="button"
        style={{ display: "none" }}
        ref={ref}
        className="btn btn-primary d none"
        data-toggle="modal"
        data-target="#exampleModal"
      />
      <EditNote note={note} setnote={setnote} />
      <div className="row my-3">
        <h2
          className="fontMain"
          style={{ color: mode === "light" ? "" : "#dee4ce" }}
        >
          Notes
        </h2>
        {search === ""
          ? notes
              .map((item) => item)
              .reverse()
              .map((note) => {
                return (
                  <NoteItem
                    key={note._id}
                    UpdateNote={UpdateNote}
                    note={note}
                  />
                );
              })
          : notes
              .map((item) => item)
              .reverse()
              .filter((note) => {
                return (
                  note.title.includes(search) ||
                  note.description.includes(search) ||
                  note.tag.includes(search)
                );
              })
              .map((note) => {
                return (
                  <NoteItem
                    key={note._id}
                    UpdateNote={UpdateNote}
                    note={note}
                  />
                );
              })}
      </div>
    </>
  );
}
