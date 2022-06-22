import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import TextForm from './components/Form.js';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const [mode, setMode] = useState('light');

  const toggle1 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark mode enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode enabled', 'success');
    }
  }

  return (
    <div>
    <Router>
      <Navbar mode={mode} toggle1Mode={toggle1}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
            <Route path="/about" element={<About mode={mode}/>}/>
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
