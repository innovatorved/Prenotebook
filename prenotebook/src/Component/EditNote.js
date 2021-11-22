import React, { useContext , useRef} from 'react';
import { NoteContext } from '../Context/notes/NoteState';
import { BackContext } from '../Context/notes/BackState';

export default function EditNote(props) {
    const {UpdateNote , playing , speak} = useContext(NoteContext);
    const {mode} = useContext(BackContext);

    const {note , setnote} = props;

    const refClose = useRef(null);
    const NoteEditing =(e)=>{
        setnote({...note,[e.target.name]: e.target.value});
    }

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{"backgroundColor" : mode==="light"?"#eef2e4":"#32383e"}}>
                        <div className="modal-header">
                            <h5 className="modal-title" style={{"color" : mode==="light"?"":"#dee4ce"}} id="exampleModalLabel">Your Note</h5>
                            <i className={`fas fa-${playing===true?"pause":"play"} ${mode!=="light"?"i-color-wh":""}`} onClick={()=>speak(note)} ></i>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="form-group">
                                    <label htmlFor="title" style={{"color" : mode==="light"?"":"#dee4ce"}}>Title</label>
                                    <input type="text" style={{"backgroundColor" : mode==="light"?"":"#667574" ,"color" : mode==="light"?"":"white"}} value={note.title} className="form-control" id="etitle" name="title" placeholder="Title" onChange={NoteEditing} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description" style={{"color" : mode==="light"?"":"#dee4ce"}}>Description</label>
                                    <textarea type="text" style={{"backgroundColor" : mode==="light"?"":"#667574" ,"color" : mode==="light"?"":"white"}} value={note.description} rows={5} className="form-control" id="edescription" name="description" placeholder="Description" onChange={NoteEditing}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tag" style={{"color" : mode==="light"?"":"#dee4ce"}}>Tag</label>
                                    <input type="text" style={{"backgroundColor" : mode==="light"?"":"#667574" ,"color" : mode==="light"?"":"white"}} value={note.tag} className="form-control" id="etag" name="tag" placeholder="tag" onChange={NoteEditing} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
                            <button type="button" disabled={note.title.length<3 || note.description.length<10} className="btn btn-outline-info" onClick={(()=>{
                                    UpdateNote(note._id , note);
                                    refClose.current.click();
                                })}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}