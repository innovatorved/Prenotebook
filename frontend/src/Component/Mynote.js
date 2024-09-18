import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { NoteContext } from "../Context/notes/NoteState";
import { BackContext } from "../Context/notes/BackState";

export default function () {
  const { id } = useParams();
  const { notes, playing, speak, fetchNotes } = useContext(NoteContext);
  const { mode } = useContext(BackContext);

  const [mynote, setmynote] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token") && notes[0]._id === "1") {
      fetchNotes();
    }
    const n = notes.filter((note) => {
      return note._id === id;
    });
    if (n.length > 0) {
      setmynote(n[0]);
    }
  }, [id, fetchNotes, notes]);

  return (
    <div className="container text-center">
      <div
        className="card"
        style={{
          backgroundColor: mode === "light" ? "" : "#667574",
          borderColor: mode === "light" ? "gray" : "#dee4ce",
        }}
      >
        <div className="card-body">
          <br />
          <div className="list-inline">
            <h5
              className="list-inline-item card-title text-center fontMain"
              style={{ color: mode === "light" ? "" : "white" }}
            >
              {mynote.title}
            </h5>
            <button
              type="button"
              className="list-inline-item mx-2 btn btn-outline-primary"
              title={`${playing !== true ? "Play Note" : "Stop Playing"}`}
            >
              <i
                className={`fas fa-${playing === true ? "pause" : "play"}`}
                onClick={() => speak(mynote)}
              ></i>
            </button>
          </div>
          <hr style={{ color: mode === "light" ? "black" : "white" }} />
          <br />
          <br />
          <pre
            className="card-text noteItem"
            style={{
              color: mode === "light" ? "" : "white",
              textAlign: "justify",
              fontFamily: "arial",
            }}
          >
            {mynote.description}
          </pre>
          <br />
        </div>
      </div>
    </div>
  );
}
