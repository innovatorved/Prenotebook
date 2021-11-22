import React , {useContext} from 'react';
import {NoteContext} from '../Context/notes/NoteState';
import {BackContext} from '../Context/notes/BackState';

export default function NoteItem(props) {
    const {DeleteNote } = useContext(NoteContext);
    const {mode} = useContext(BackContext);

    const {note , UpdateNote} = props;

    const delNote=()=>{
        DeleteNote(note._id);
    };

    const TriggerUpdateNote=()=>{
        UpdateNote(note);
    };

    return (
        <div className="col-md-3 my-3 noteItem" onClick={TriggerUpdateNote}> 
            <div className="card" style={{"backgroundColor" : mode==="light"?"":"#667574" , "borderColor" : mode==="light"?"gray":"#dee4ce"}}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title" style={{"color" : mode==="light"?"":"white"}}>{note.title}</h5>
                        <i className="fas fa-trash-alt mx-2" onClick={delNote}></i>
                        <i className="fas fa-pen mx-2" onClick={TriggerUpdateNote}></i>
                    </div>
                    <p className="card-text" style={{"color" : mode==="light"?"":"white"}}>{note.description}</p>
                </div>
            </div>
        </div>
    )
}
