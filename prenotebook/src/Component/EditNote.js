import React, { useContext } from 'react';
import { NoteContext } from '../Context/notes/NoteState';

export default function EditNote(props) {
    const {UpdateNote} = useContext(NoteContext);
    const {note , setnote} = props;

    const NoteEditing =(e)=>{
        setnote({...note,[e.target.name]: e.target.value});
    }

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" value={note.title} className="form-control" id="title" name="title" placeholder="Title" onChange={NoteEditing} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea type="text" value={note.description} className="form-control" id="description" name="description" placeholder="Description" onChange={NoteEditing}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="etag">Tag</label>
                                    <input type="text" value={note.tag} className="form-control" id="etag" name="etag" placeholder="Description" onChange={NoteEditing} />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={(()=>{return UpdateNote(note._id , note)})}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}