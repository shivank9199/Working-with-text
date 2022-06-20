import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Features</a>
                <a className="nav-link" href="#">Pricing</a>
                <a className="nav-link disabled">Disabled</a>
            </div>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} style={{marginRight: 10}}>
                <input className='form-check-input' onClick={props.toggleMode} type='checkbox' id='flexSwitchCheckDefault' />
                <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>Enable Dark Mode</label>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className='form-check-input' onClick={props.toggle1Mode} type='checkbox' id='flexSwitchCheckDefault' />
                <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>Enable Black Mode</label>
            </div>
        </div>
        </nav>

    </div>
  )
}

