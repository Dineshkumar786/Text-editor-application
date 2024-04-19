import React, { useState } from "react";

export default function AboutUs() {
  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setbtnText] = useState("Enable Dark Mode");


  const toggleStyleChange = () =>{
    if(myStyle.color === "black"){
        setmyStyle({
            color: 'white',
            backgroundColor: 'black',
            border :'1px solid white',
        })
        setbtnText("Enable Light Mode");
    }
    else {
        setmyStyle(
            {
                color: 'black',
                backgroundColor : 'white',
                border:'2px solid black'
            }
        )
        setbtnText("Enable Dark Mode");
    }
}


    return (
      <div className="container my-6 mx-2" style={myStyle}>

        <h3 className="my-3">About US</h3>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyse your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyse your text quickly  and efficiently. 
                Be it word count or character count.   
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is  free character  counter tool that provides instant character and  word  count statisitcs  
                for a given text. Textutils report  the number of words  and character. 
                Thus it is suitable for writing text with word/ character limit
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
               This word counter  software works in any web browsers such as google chrome, safari ,firefox , 
               internet explorer, opera, brave. It suits to count character in 
               facebook, blogs, books, excel documents, pdf , documents ,essays, etc.
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container my-3">
          <button className="btn btn-outline-primary my-2 " onClick={toggleStyleChange}>
            {btnText}
          </button>
        </div> */}
      </div>
    );
  };

