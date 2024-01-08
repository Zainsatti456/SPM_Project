import React, { useState } from 'react'


export default function TextForm(props) {

    

const handleupClick = () => {
    // console.log("uppercase was clicked"  + text);
    let newText = text.toUpperCase();
    setText(newText)
}
const handleLoClick = () => {
    // console.log("lowercase was clicked"  + text);
    let newText = text.toLowerCase();
    setText(newText)
}
const handleCopyToClipboard = () => {
  navigator.clipboard.writeText(text)
      .then(() => {
          console.log("Text copied.");
      })
      .catch((err) => {
          console.error("Error copying text to clipboard:", err);
      });
};
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
};





const handleClearClick = () => {
  // console.log("lowercase was clicked"  + text);
  let newText = '';
  setText(newText)
}
const handleonChange = (event) => {
  setText(event.target.value);
}
const [text, setText] = useState('');
  return (
    <>
    <div className="container"  style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
         <h1>{props.heading} </h1> 

      <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode === 'dark' ? 'gray' : 'white',color:props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8" />
    </div>
    <button className="btn btn-primary mx-2"onClick={handleupClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2"onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2"onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2"onClick={handleCopyToClipboard}>Copy to Clipboard</button>
    <button className="btn btn-primary mx-2"onClick={handleExtraSpaces}>Remove Extra Spaces</button>


 </div>
 <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
  <h1>
    Your Text Summary
  </h1>
  <p>
    No of Words {text.split(" ").length} and {text.length} charecters
  </p>
  <p>{0.008*text.split(" ").length} Munites read</p>
  <h1>Preview</h1>
  <p>{text.length>0?text:"Enter Something In The Textbox Above To Preview It Here"}</p>

 </div>
 </>
  )
}
