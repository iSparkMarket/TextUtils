import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleOnchange = (event) =>{
        // console.log("Hello");
        setText(event.target.value);
    }
    const handleOnClick = () => {
        // console.log("Button Click");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleOnClickLow = () => {
        // console.log("Button Click");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speak Started!", "success");
    }
    
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
  return (
    <>
    <div className='mt-4' style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="my-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="10"></textarea>
        </div>
        <div className='d-flex flex-wrap gap-2'>
            <button className={`btn btn-${props.BtnMode}`} onClick={handleOnClick}>Convert to Uppercase</button>
            <button className={`btn btn-${props.BtnMode}`} onClick={handleOnClickLow}>Convert to Lowercase</button>
            <button className={`btn btn-${props.BtnMode}`} onClick={handleCopy}>Copy Text</button>
            <button className={`btn btn-${props.BtnMode}`} onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className={`btn btn-${props.BtnMode}`} type="submit" onClick={speak}>Speak</button>
            <button className={`btn btn-${props.BtnMode}`} onClick={handleClear}>Clear Text</button>
        </div>
    </div>
    <div className="my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <h5>Words : {text.split(" ").length}<br/>Characters : {text.length}<br/>Reading Time : {0.008 * text.split(" ").length} Minutes</h5>
    </div>
    <div className="my-4" style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your text Priview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}