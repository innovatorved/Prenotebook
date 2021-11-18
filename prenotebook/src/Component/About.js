import React, { useContext } from 'react';
import { NoteContext } from '../Context/notes/NoteState';
import { BackContext } from '../Context/notes/BackState';

// Import Image
import notebookDark from './notebookDark.png';
import notebookLight from './notebookLight.png';

const About = () => {
    // eslint-disable-next-line
    const val = useContext(NoteContext);
    const {mode} = useContext(BackContext);

    return (
        <p className="container" style={{"color" : mode==="light"?"":"#dee4ce"}}>
            <img src={mode==="light"?notebookDark:notebookLight} className="rounded mx-auto d-block" alt="Logo" width={100} height={100} /><br/><br/>
            Notebook is a note-taking service included as part of the free, web-based Notebook Editors . 
            <br/>
            Notebook is available as a web application for desktop and mobile versions.
            <br/>
            <br/>
            <br/>
            Design of Notebook is responsive design so its support on all web screens with the  help of Bootstrap framework. 
            The web application offers a variety of tools for  creating a note to share a note with a link to provide full access to your note.The  interface allows for a single-column view or a multi-column view. Notes can be  categorized with tags by default General tag.
            <br/> 
            <br/>           
            MERN stack is a software stack that includes four open-source technologies:  
            (MongoDB, Express.js, React, and Node.js).
            <br/>   
            <br/>         
            These components provide an end-to-end framework for building dynamic web sites and web applications.
            Among these technologies MongoDB is a database system, 
            <br/>
            <br/>
            Node.js is a server-side  runtime environment, Express.js is a web framework for Node.js and React is a  client-side JavaScript library used for building user interfaces.
            <br/>
            <br/>
            <br/>
            Because all components of the MERN stack support programs that are written in  JavaScript, MERN applications can be written in one programming language for  both server-side and client-side execution environments.
            <br/>
            <br/>
            <br/>
            Express.js (also referred to as Express) is a modular web application framework for  Node.js.
            Whilst Express is capable of acting as an internet-facing web server, even supporting  SSL/TLS out of the box, it is often used in conjunction with a reverse proxy such as  NGINX or Apache for performance reasons.

        </p>
    )
}

export default About;
