import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import TextForm from './components/Form.js';
import Navbar from './components/Navbar';

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
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#051f39';
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

  const toggle1 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Black mode enabled', 'success');
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
      <Navbar mode={mode} toggleMode={toggle} toggle1Mode={toggle1}/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} mode={mode}/>;
    </div>
  );
}

export default App;
