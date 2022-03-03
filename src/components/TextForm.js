import React,{useState} from 'react'

export default function TextForm(props) 


{

    const handleUpClick = ()=>{
        console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("on Change");   
        setText(event.target.value);
    }
    const [text, setText] =useState('Enter text here');
  return (
 <>
  <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      
      <div className="mb-3">
          <h1>{props.Text }</h1>
      

  <textarea className="form-control" id="Text" onChange={handleOnChange} value={text} rows="10" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>

  <button type="button" className="btn btn-lg btn-primary my-3" onClick={handleUpClick} >Convert to UpperCase</button>
  
</div>
      
  </div>

 
  <div className="container" style={{ color:props.mode=== 'dark'?'white':'black'   }} >
    
    <h1> Your Text Summary </h1>
    <p> {text.split(" ").length} words and {text.length} characters</p>
    
  </div>
  
  
  </>

  )
}
