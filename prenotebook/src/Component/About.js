import React , {useContext } from 'react';
import { NoteContext } from '../Context/notes/NoteState';

const About = () => {
    // eslint-disable-next-line
    const val = useContext(NoteContext);

    return (
        <div>
            This is About
        </div>
    )
}

export default About;
