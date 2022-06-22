import React from 'react'

export default function About(props) {
  return (
    <div>
        <h1 style={{textAlign:"center", marginBottom: '20px'}}>About</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <strong>Textarea</strong>
                    </button>
                </h2>
                <div style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        You can write your text in the blank section.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong>Summary</strong>
                    </button>
                </h2>
                <div style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        You get the information about the number of words, number of characters and time to read the text in this section.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>Preview</strong>
                    </button>
                </h2>
                <div style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        You can see your written text in this section.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
