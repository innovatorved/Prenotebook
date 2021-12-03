import React, { useContext, useRef } from 'react';
import { Link } from "react-router-dom";

import { NoteContext } from '../Context/notes/NoteState';
import { BackContext } from '../Context/notes/BackState';
import { AlertContext } from '../Context/notes/AlertState';

import Alert from './Alert';

export default function EditNote(props) {

    const { showAlert } = useContext(AlertContext);

    const { UpdateNote, playing, speak } = useContext(NoteContext);
    const { mode } = useContext(BackContext);
    const { note, setnote } = props;

    const refClose = useRef(null);

    const NoteEditing = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });
    }

    const download = () => {
        let ele = document.createElement("a");
        const txt = `${note.title}\n\n${note.description}\n\n\n${note.tag}\n\n${note.date}`;
        ele.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(txt));
        ele.setAttribute("download", `${note.title}.txt`);
        ele.style.display = "none";
        document.body.appendChild(ele);
        ele.click();
        document.body.removeChild(ele);
    }

    const ChangeShare = () => {
        if (note.share === true) {
            setnote({ ...note, share: false });
            showAlert("Note Private, Kindly Save the Changes", "primary");
        }
        else {
            setnote({ ...note, share: true });
            showAlert("Note Public, Kindly Save the Changes", "warning");
        }
    }

    const CopyToClipBoard = () => {
        const noteUrl = `${window.location.origin}/note/${note._id}`;
        navigator.clipboard.writeText(noteUrl);
        showAlert("Link Copied", "primary");
    }



    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ "backgroundColor": mode === "light" ? "#eef2e4" : "#32383e" }}>
                        <div className="modal-header">
                            <div>
                                <h5 className="modal-title fontMain" style={{ "color": mode === "light" ? "" : "#dee4ce" }} id="exampleModalLabel" onClick={download}>Your Note<i class="mx-2 fas fa-file-download" title="Download Note"></i></h5>
                                <div className="form-check form-switch" >
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault2" checked={note.share ? true : false} readOnly={true} onClick={ChangeShare} />
                                    <label className={`form-check-label text-${mode === "light" ? "dark" : "light"} mx-2 fontMain`} htmlFor="flexSwitchCheckDefault2">Sharing</label>
                                </div>
                            </div>
                            <button className={`btn btn-outline-info mx-2 me-2 ${!note.share ? "d-none" : ""}`} title={"Copy Link"} onClick={CopyToClipBoard}><i className="far fa-copy mx-2 my-2"></i></button>
                            <Link to={`/note/${note._id}`} onClick={()=>{
                                refClose.current.click();                                
                                }}><i className={`fas fa-angle-right mx-2 me-2 ${!note.share ? "d-none" : ""}`}></i></Link>

                            <button type="button" className={`btn-close ${mode==="light"?"":"bg-light"}`} data-dismiss="modal" aria-label="Close">
                            </button>

                        </div>
                        <div className="mx-2 my-1"><Alert /></div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="title" style={{ "color": mode === "light" ? "" : "#dee4ce" }}>Title</label>
                                    <input type="text" style={{ "backgroundColor": mode === "light" ? "" : "#667574", "color": mode === "light" ? "" : "white" }} value={note.title} className="form-control" id="etitle" name="title" placeholder="Title" onChange={NoteEditing} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description" style={{ "color": mode === "light" ? "" : "#dee4ce" }}>Description</label>
                                    <textarea type="text" style={{ "backgroundColor": mode === "light" ? "" : "#667574", "color": mode === "light" ? "" : "white" }} value={note.description} rows={5} className="form-control" id="edescription" name="description" placeholder="Description" onChange={NoteEditing}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tag" style={{ "color": mode === "light" ? "" : "#dee4ce" }}>Tag</label>
                                    <input type="text" style={{ "backgroundColor": mode === "light" ? "" : "#667574", "color": mode === "light" ? "" : "white" }} value={note.tag} className="form-control" id="etag" name="tag" placeholder="tag" onChange={NoteEditing} />
                                </div>
                            </form>
                            <br /><br />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-primary" title={`${playing !== true ? "Play Note" : "Stop Playing"}`} ><i className={`fas fa-${playing === true ? "pause" : "play"}`} onClick={() => speak(note)} ></i></button>
                            <button type="button" ref={refClose} className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            <button type="button" disabled={note.title.length < 3 || note.description.length < 10} className="btn btn-outline-info" onClick={(() => {
                                UpdateNote(note._id, note);
                                refClose.current.click();
                            })}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}