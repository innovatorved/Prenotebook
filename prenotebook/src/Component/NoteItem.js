import React , {useContext} from 'react';
import {NoteContext} from '../Context/notes/NoteState';

export default function NoteItem(props) {
    const {DeleteNote} = useContext(NoteContext);
    const {note} = props;

    const delNote=()=>{
        DeleteNote(note._id);
    };

    return (
        <div className="col-md-3 my-3"> 
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fas fa-trash-alt mx-2" onClick={delNote}></i>
                        <i className="fas fa-pen mx-2"></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}
