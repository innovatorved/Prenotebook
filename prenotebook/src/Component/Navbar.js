import React  from 'react';
import { Link ,useLocation } from "react-router-dom";

export default function Navbar() {

    let location = useLocation();

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Prenotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link to="/login" className="btn btn-outline-info me-2" role="button" aria-disabled="true">Login</Link>
                        <Link to="/signup" className="btn btn-outline-info me-2" role="button" aria-disabled="true">SignUp</Link>

                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
