import React from 'react'
import Navbar from './Navbar'

export default function Home() {


  return (
    <div   >
      <Navbar />
      <div className='container my-3'>

        <h1 style={{ color: "#cfe2ff" }}>Some of the important Topics are given below :</h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                REACT js
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Introduction</strong> ReactJS is an open-source JavaScript library created by Facebook's Jordan Walke to make user interfaces for both web and mobile systems. React was first used in 2011 on Facebook's newsfeed. In 2012, it was used on Instagram, and in 2013 it was made available to the public.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What is the difference between functional and class based component?

              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">

              <div className="accordion-body">
                <strong>FUNCTION BASED COMPONENT</strong> <li>In function we use <b>useEffect</b> hook instead of using  React lifecycle methods such as <b>componentDidMount componentDidUpdate and componentWillUnmount</b></li>
                <li>A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element</li>
                <li>we use state as const[text,setText]=useState("hi") </li>
                <li>use simply use props,state instaed of this.props,this.state</li>

              </div>
              <div className="accordion-body">
                <strong>CLASS BASED COMPONENT</strong> <li>In class we use <b>React lifecycle methods</b>  such as <b>componentDidMount componentDidUpdate and componentWillUnmount</b> </li>
                <li> A class component requires you to extend from React. Component and create a render function which returns a React element.</li>
                <li>we use state as {'constructor(){super();'}<br />this.state = {`{text:"hi"}}`}` and we use <b>this.setState({`{text:"hello"}`})</b> to change the text</li>
                <li>we use this.props,this.state instaed of props,state</li>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Softwares that you have to install to create the react-app
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <li>Node js</li>
                <li>Visual code studio</li>
                <li>from vs code you have to install some extensions such as:<br /> 1) ES7 React/Redux/GraphQL/React-Native snippets <br /> 2) Bracket Pair Colorization Toggler <br /> 3) Auto Rename Tag <br /> 4) Live Server <br /> 5) Thunder client (for API test) & Github</li>

              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                What is jsx
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>JSX = HTML +  JS </strong> JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags into react elements. You are not required to use JSX, but JSX makes it easier to write React applications.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}



