import React, {useState} from 'react';

export default function TextForm(props) {

  const [text, setValue] = useState('');
  const handleUpButton = () => {
    let newText = text.toUpperCase();
    setValue(newText);
    props.showAlert('Converted to uppercase', 'success')
  }

  const handleLowButton = () => {
    let newText = text.toLowerCase();
    setValue(newText);
    props.showAlert('Converted to lowercase', 'success')
  }

  const textAgain = (event) => {
    setValue(event.target.value);
  }

  return (

      <div className="mb-3">
          
          <h1>Let's work with the text</h1>

          <div className='text-ar'>
            <textarea placeholder='Enter your text here...' className="form-control" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} value={text} onChange={textAgain} id="exampleFormControlTextarea1"></textarea>
          </div>

          <div className='extra'>
            <button className='btn' disabled= {text.length===0} style={{backgroundColor: props.mode==='light'?'#22bca5':'#22bca5', color: props.mode==='light'?'black':'black', marginTop: 5, marginRight: 4}} onClick={handleUpButton}>Change to Uppercase</button>
            <button className='btn' disabled= {text.length===0} style={{backgroundColor: props.mode==='light'?'#22bca5':'#22bca5', color: props.mode==='light'?'black':'black', marginTop: 5, marginRight: 4}} onClick={handleLowButton}>Change to lowerCase</button>
          </div>

          <div className='extra' style={{marginTop: 10}}>
            <h3>Summary</h3>
            <p>Your number of words are <b>{text.split(" ").filter((e) => {return e.length !== 0}).length}</b> and number of characters are <b>{text.length}</b></p>
            <p>It will take <b>{0.2* (text.split(" ").filter((e) => {return e.length !== 0}).length)} seconds</b> to read</p>
          </div>

          <div className='extra'>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Nothing to preview'}</p>
          </div>
          
      </div>
  )
}