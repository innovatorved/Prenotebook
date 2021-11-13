import React , {useContext} from 'react';
import {NoteContext} from '../Context/notes/NoteState';
import NoteItem from './NoteItem';

export default function Notes() {
    const {notes , setNotes} = useContext(NoteContext);

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
