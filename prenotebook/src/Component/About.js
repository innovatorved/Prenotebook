import React , {useContext} from 'react';
import NoteContext from '../Context/notes/NoteContext';

const About = () => {
    const val = useContext(NoteContext);
    return (
        <div className="container">
            This is About
            {val.name}
        </div>
    )
}

export default About;
