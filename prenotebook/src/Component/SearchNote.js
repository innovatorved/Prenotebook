import React , {useContext , useEffect} from 'react';
import {useParams} from "react-router-dom";

import {NoteContext} from '../Context/notes/NoteState';
import {BackContext} from '../Context/notes/BackState';

export default function SearchNote() {
    const {SearchShareNote , searchNote} = useContext(NoteContext);
    const {mode} = useContext(BackContext);

    const {id} = useParams();

    useEffect(() => {
        SearchShareNote(id);
        // eslint-disable-next-line
    }, []);

    
    return (
        <div className="container text-center">
            {searchNote.success==="true"?
                <div> 
                <div className="card" style={{"backgroundColor" : mode==="light"?"":"#667574" , "borderColor" : mode==="light"?"gray":"#dee4ce"}}>
                    <div className="card-body">
                    <br/>
                        <div>
                            <h5 className="card-title text-center fontMain" style={{"color" : mode==="light"?"":"white"}}>{searchNote.mynote.title}</h5>
                        </div>
                        <hr/>
                        <br/><br/>
                        <p className="card-text noteItem" style={{"color" : mode==="light"?"":"white"}}>{searchNote.mynote.description}</p>
                        <br/><br/>
                    </div>
                </div>
            </div>
            :
            <div>
                <h5 className="fontMain" style={{"color" : mode==="light"?"":"white"}}>Note Not Found</h5>
            </div>
        }
        </div>
    )
}
