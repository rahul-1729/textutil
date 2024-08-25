import React, { useState } from 'react'
 

function Textbox(props) {
  const[text,setText]= useState("");
  const handleUcText = ()=>{
       var newText = text.toUpperCase();
       setText(newText);
  }
  const handleLcText = ()=>{
    var newText = text.toLowerCase();
    setText(newText);
}
  const handleChange =(event)=>{
       setText(event.target.value);
  }
  return (
    <>
      
     <div className="mb-3 my-5" >
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.title}</h1></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleChange} value={text}></textarea>
      </div>

      <button type="button" className="btn btn-primary "  onClick={handleUcText}>UpperCase</button>
      <button type="button" className="btn btn-primary mx-3" onClick={handleLcText}>LowerCase</button>
      <h3 className='my-3'>Preview</h3>
      <p className='my-3'>Total Words: {text.split(" ").length}</p>
      <p className='my-3'>Total Characters: {text.length}</p>
          
    
    </>
  )
}



export default Textbox
