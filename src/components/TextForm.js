import React , {useState} from 'react'


export default function TextForm(props) {



const handleUpClick =() =>{
  // console.log("uppercase was clicked ");
  let newText =  text.toUpperCase();
  setText(newText);
}

const handleLoClick =() =>{
  // console.log ("lowercase was clicked");
  let newText1 = text.toLowerCase();
  setText(newText1);
}

const handleCopy =() =>{
  console.log("Im a copy");
  var text =  document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
}

const handleExtraSpaces = ()=> {
  let newText3 = text.split(/[  ]+/);
  setText(newText3.join("  "));
}

const clearText =() =>{
  console.log ("Text has been cleared");
  let newText2 = '';
  setText(newText2);
}

const handleOnChange = (event) =>{
  console.log("text have changes");
  setText(event.target.value);
}


  const [text, setText] = useState('');
  // text =  "new text"; // wrng way to change the text , we have to use the setText variable.
  // setText("new text"); // correct way to  change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}  onChange={handleOnChange} rows="5"></textarea>
        </div>
        <button className='btn btn-outline-success mx-1 my-1'  onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-outline-primary mx-1 my-1'  onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-outline-success mx-1 my-1'  onClick={handleCopy}>Copy to clipboard</button>
        <button className='btn btn-outline-secondary mx-1 my-1' onclick={handleExtraSpaces}>Remove Extra spaces</button>
        <button className='btn btn-outline-danger mx-1 my-1'  onClick={clearText}>Clear Text</button>
        
        

    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary is :</h3>
      <p> {text.split(" ").filter((element) =>{return element.length!==0}).length} Words, {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h4>Preview</h4>
      <p>{text.length?text:"Enter something in the textbox above to preview it here"} </p>
    </div>
    </>
  )
}

