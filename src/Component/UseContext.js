import React from 'react'
import { useContext } from 'react'
import { Firstname, Lastname } from '../App';



export default function UseContext() {
  const fName = useContext(Firstname);
  const lName = useContext(Lastname);
  document.title = "UseContext"

  return (
    <>

      <div className='container ' >
        <h1 className='text-center my-3'><b>UseContext Hook</b></h1>
        <div className="container my-3">
          <div className='row my-3'>
            <div className='col-md-6'>
              <img className='my-3' src='https://f4n3x6c5.stackpathcdn.com/article/usecontext-hook-in-react-js/Images/01.png' alt='context' />
            </div>

            <div className='col-md-6'>
              <p>if we have to transfer data from parent component to childC component we can directly send data without sending it from each and every component </p>
              <p>React Context is a way to manage state globally.<br />
                It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
              <h3 className='my-3'><b>Example</b><br />
                Hi my name is {fName} {lName}</h3>
              <p>the name<b> Muhammad Siddique </b>is passed from parent component (App.js) to child component (useContext.js)</p>
            </div>
          </div>
        </div>

        <h2>for more information click on the given Buttons</h2>
        <div class="d-flex justify-content-around my-3">
          <a href='https://youtu.be/iFssz5lpncw' className="btn btn-primary">usecontext</a>
          <a href='https://youtu.be/kSIm78jmqhE' className="btn btn-primary"> thapa Technical</a>
          <a href='https://www.w3schools.com/react/react_usecontext.asp' className="btn btn-primary">W 3 School</a>
        </div>


      </div>
    </>
  )
}
