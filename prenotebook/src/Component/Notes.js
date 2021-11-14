import React , {useContext , useEffect} from 'react';
import {NoteContext} from '../Context/notes/NoteState';
import NoteItem from './NoteItem';

export default function Notes() {
    const {notes , fetchNotes} = useContext(NoteContext);

    useEffect(() => {
        fetchNotes();
    },[])

    return (
        <div className="row">
            <h2>Notes</h2>
            {
                notes.map((note)=>{
                    return(
                        <NoteItem key={note._id} note={note}/>
                    )
                })
            }
        </div>
        
    )
}
