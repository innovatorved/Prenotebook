import React, { useContext, useEffect , useRef , useState} from 'react';
import { NoteContext } from '../Context/notes/NoteState';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import EditNote from './EditNote';

export default function Notes() {
    const { notes, fetchNotes } = useContext(NoteContext);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null);
    const [note, setnote] = useState({
        "title" : "",
        "description" : "",
        "tag" : ""
    });
    const UpdateNote = async(EditNote) => {
        await setnote(EditNote);
        await ref.current.click();        
    };

    return (
        <>
            <AddNote />
            <input type="button" style={{"display": "none"}} ref={ref} className="btn btn-primary d none" data-toggle="modal" data-target="#exampleModal"/>
            <EditNote note={note} setnote={setnote}/>
            <div className="row my-3">
                <h2>Notes</h2>
                {
                    notes.map((note) => {
                        return (
                            <NoteItem key={note._id} UpdateNote={UpdateNote} note={note} />
                        )
                    })
                }
            </div>
        </>

    )
}
