import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success");
    }
  
    const handleLoClick = () => {
        // console.log("Uppercase was clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('')

    return (
        <>
        <div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1 className="text-center">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Upper Case</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Covert to Lower Case</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Yext Summery</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here..."}</p>

        </div>

        </>
    )
}
