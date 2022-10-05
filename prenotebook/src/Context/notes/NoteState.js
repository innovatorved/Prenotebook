import React, { createContext, useState } from "react";

// Init SpeechSynth API
const synth = window.speechSynthesis;
const voices = synth.getVoices();

// Createcontext
const NoteContext = createContext();

let initialValues = [
  {
    _id: "1",
    title: "",
    description: "",
    tag: "Genral",
  },
  {
    _id: "2",
    title: "",
    description: "",
    tag: "Genral",
  },
  {
    _id: "3",
    title: "",
    description: "",
    __v: 0,
  },
  {
    _id: "4",
    title: "",
    description: "",
    __v: 0,
  },
];

const host = "http://localhost:3002";

const NoteState = (props) => {
  const [notes, setnotes] = useState(initialValues);

  const fetchNotes = async () => {
    const authToken = localStorage.getItem("token");
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const FetchedNotes = await response.json();
    // Set the Notes
    setnotes(FetchedNotes);
  };

  const [searchNote, setsearchNote] = useState("");
  const SearchShareNote = async (id) => {
    const authToken = localStorage.getItem("token");
    const url = `${host}/api/notes/sharedNote/${id}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    const FetchedShareNote = await response.json();
    setsearchNote(FetchedShareNote);
  };

  // Add Notes
  const AddNote = async (note) => {
    const authToken = localStorage.getItem("token");
    // Call fetch api and update
    const url = `${host}/api/notes/createnotes`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify(note),
    });
    const jsonRes = await response.json();
    setnotes([...notes, jsonRes.saveNote]);
    return jsonRes;
  };

  // Delete Note
  const DeleteNote = async (id) => {
    const authToken = localStorage.getItem("token");
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    // eslint-disable-next-line
    const jsonRes = await response.json();

    setnotes(
      notes.filter((note) => {
        return note._id !== id;
      })
    );
  };

  const [playing, setplaying] = useState(false);
  const speak = (note) => {
    if (synth.speaking || note === null || note === "") {
      // console.error('Already speaking...');
      synth.cancel();
      return;
    }

    // Check if speaking
    const textInput = note.title + "       " + note.description;

    if (textInput !== "") {
      const speakText = new SpeechSynthesisUtterance(textInput);
      speakText.onstart = (e) => {
        setplaying(true);
      };
      speakText.onend = (e) => {
        // console.log('Done speaking...');
        setplaying(false);
      };
      speakText.onerror = (e) => {
        // console.error('Something went wrong');
        setplaying(false);
      };
      const selectedVoice = "Microsoft Zira Desktop - English (United States)";
      voices.forEach((voice) => {
        if (voice.name === selectedVoice) {
          speakText.voice = voice;
        }
      });
      speakText.rate = "1";
      speakText.pitch = "1";
      // Speak
      synth.speak(speakText);
    }
  };

  const UpdateNote = async (id, note) => {
    const authToken = localStorage.getItem("token");

    // Call fetch api and update
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify(note),
    });
    // eslint-disable-next-line
    const jsonRes = await response.json();
    // search for note with id and Update
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = note.title;
        newNotes[index].description = note.description;
        newNotes[index].tag = note.tag;
        newNotes[index].share = note.share;
        setnotes(newNotes);
        break;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{
        host,
        notes,
        AddNote,
        DeleteNote,
        fetchNotes,
        UpdateNote,
        setnotes,
        speak,
        playing,
        searchNote,
        SearchShareNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
export { NoteContext };
