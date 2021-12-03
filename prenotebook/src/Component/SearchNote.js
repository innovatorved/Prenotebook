import React, { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { NoteContext } from '../Context/notes/NoteState';
import { BackContext } from '../Context/notes/BackState';

export default function SearchNote() {
    const { SearchShareNote, searchNote, playing, speak } = useContext(NoteContext);
    const { mode } = useContext(BackContext);

    const { id } = useParams();

    useEffect(() => {
        SearchShareNote(id);
    }, [id, SearchShareNote]);


    return (
        <div className="container text-center">
            {searchNote.success === "true" ?
                <div>
                    <div className="card" style={{ "backgroundColor": mode === "light" ? "" : "#667574", "borderColor": mode === "light" ? "gray" : "#dee4ce" }}>
                        <div className="card-body">
                            <br />
                            <div className="list-inline">
                                <h5 className="list-inline-item card-title text-center fontMain" style={{ "color": mode === "light" ? "" : "white" }}>{searchNote.mynote.title}</h5>
                                <button type="button" className="list-inline-item mx-2 btn btn-outline-primary" title={`${playing !== true ? "Play Note" : "Stop Playing"}`} ><i className={`fas fa-${playing === true ? "pause" : "play"}`} onClick={() => speak(searchNote.mynote)} ></i></button>
                            </div>
                            <hr style={{ "color": mode === "light" ? "black" : "white" }} />
                            <br /><br />
                            <pre className="card-text noteItem" style={{ "color": mode === "light" ? "" : "white", "textAlign": "justify", "fontFamily": "arial"}}>
                                {searchNote.mynote.description}
                            </pre>
                            <br />
                        </div>
                    </div>
                    <br /><br />
                </div>
                :
                searchNote.success === undefined ?
                    <div className="loadingio-spinner-spinner-d5vda8qm7j5"><div className="ldio-9u8gbddmqad">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                    </div>
                    :
                    <div>
                        <h5 className="fontMain" style={{ "color": mode === "light" ? "" : "white" }}>Note Not Found</h5>
                    </div>

            }
        </div>
    )
}
