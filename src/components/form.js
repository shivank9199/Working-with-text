import React, {useState} from 'react'

export default function TextForm() {

  
  const handleUpButton = () => {
    let newText = text.toUpperCase();
    setValue(newText);
  }

  const handleLowButton = () => {
    let newText = text.toLowerCase();
    setValue(newText);
  }

  const [darknwhite, setDark] = useState('Dark Mode')

  const handleDarkButton = () => {
    if (darknwhite === 'Dark Mode') {
      setDark('White Mode');
      const note = document.querySelector('.all');
      note.style.backgroundColor = 'black';
      note.style.color = 'white';
    }

    else {
      setDark('Dark Mode');
      const note = document.querySelector('.all');
      note.style.backgroundColor = 'white';
      note.style.color = 'black';
    }
  }

  const textAgain = (event) => {
    setValue(event.target.value);
  }

  const [text, setValue] = useState('');

  return (

    <div className='all'>

      <div className="mb-3">
          
          <h1>Let's work with the text</h1>

          <div className='text-ar'>
            <textarea placeholder='Enter your text here...' className="form-control" value={text} onChange={textAgain} id="exampleFormControlTextarea1"></textarea>
          </div>

          <div className='extra'>
            <button className='btn' onClick={handleUpButton}>Change to uppercase</button>
            <button className='btn' onClick={handleLowButton}>Change to lowercase</button>
            <button className='btn' onClick={handleDarkButton}>{darknwhite}</button>
          </div>

          <div className='extra'>
            <h2>Info</h2>
            <p>Your number of words are <b>{text.split(" ").length}</b> and number of characters are <b>{text.length}</b></p>
            <p>It will take <b>{0.2* (text.split(" ").length)} seconds</b> to read</p>
          </div>

          <div className='extra'>
            <h2>Text</h2>
            <p>{text}</p>
          </div>
          
      </div>

    </div>
  )
}