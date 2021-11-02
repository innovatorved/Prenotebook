import React , {useContext , useEffect} from 'react';
import { NoteContext } from '../Context/notes/NoteState';

const About = () => {
    const val = useContext(NoteContext);

    useEffect(() => {
        val.update();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
            This is About
            <div className="info">
                My Name is {val.state.name}
                & my class {val.state.class}
            </div>
        </div>
    )
}

export default About;
