import React , {useContext , useState} from 'react'
import {NoteContext} from '../Context/notes/NoteState';

export default function AddNote() {
    const {AddNote} = useContext(NoteContext)

    const [note, setnote] = useState({"title" : "" , "description":"" , "tags" : ""})
    const ChangesInNote =(e)=>{
        setnote({...note , [e.target.name]: e.target.value});
    };

    //Save Note
    const SaveNote=(e)=>{
        e.preventDefault();
        AddNote(note);
        setnote({"title" : "" , "description":"" , "tags" : ""});
    }
    return (
        <div className="container my-3">
            <h2>Create a Note</h2>
            <form className="my-3">
                <div className="form-group my-2">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title}  placeholder="Title" onChange={ChangesInNote}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" className="form-control" id="description"  name="description" value={note.description} placeholder="Description" onChange={ChangesInNote}></textarea>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="tags"  name="tags" value={note.tags} placeholder="General" onChange={ChangesInNote}/>
                </div>
                <button type="submit" disabled={note.title.length<3 || note.description.length<10} className="btn btn-primary" onClick={SaveNote}>Save</button>
            </form>
        </div>
    )
} 
