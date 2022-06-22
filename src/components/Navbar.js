import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>

        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler navbar-toggler-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
            </div>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'light':'light'}`}>
                <input className='form-check-input' onClick={props.toggle1Mode} type='checkbox' id='flexSwitchCheckDefault' />
                <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>Enable Dark Mode</label>
            </div>
        </div>
        </nav>

    </div>
  )
}

