import React , {useContext} from 'react';

import './homepage.css';

import notebook1 from './notebook1.svg';

import {BackContext} from '../Context/notes/BackState';

export default function HomePage() {

    const {mode} = useContext(BackContext);

    const note = {
        id: 1412,
        title: 'Hello Users !',
        description: 'This is a simple note that demonstrate the usage of prenotebook.Notebook is a note-taking service included as part of the free, web-based Notebook Editors . Notebook is available as a web application for desktop and mobile versions.',
    };
    return (
        <div>
            <div className="row">
                <div className="col-md-5 imgsvg img-responsive center-block">
                    <img src={notebook1} alt="..." />
                </div>

                <div className="col-md-5 my-3">
                    <div className="card" style={{ "backgroundColor": mode === "light" ? "" : "#667574", "borderColor": mode === "light" ? "gray" : "#dee4ce" }}>
                        <div className="card-body">
                            <div className="d-flex align-items-center" style={{ "color": mode === "light" ? "" : "#dee4ce" }}>
                                <h5 className="card-title">{note.title}</h5>
                                <i className="fas fa-trash-alt mx-2"></i>
                                <i className="fas fa-pen mx-2"></i>
                            </div>
                            <p className="card-text noteItem" style={{ "color": mode === "light" ? "" : "white" }}>{note.description}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}