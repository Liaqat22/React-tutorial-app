import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function UseRef() {
  const [text, setText] = useState('')
  const count = useRef(0)
  const input = useRef('')

  useEffect(() => {
    count.current = count.current + 1
  })
  const handleclick = () => {
    input.current.style.backgroundColor = 'lightblue'
    input.current.focus();
  }
  document.title = "UseRef"

  return (
    <>

      <div className='container my-3'><br />
        <h1 className='text-center'><b>UseRef Hook</b></h1>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>    <img src="https://dmitripavlutin.com/react-useref-guide/cover.png" alt='ref' style={{ width: "440px", height: '240px' }} />
            </div>
            <div className='col-md-6'>   <p>useref create a mutable variable which will not re-render the component <br />useRef() only returns one item. It returns an Object called current.</p>
              <li>When you click the button the input will be focused</li>
              <li>And backgroundColor will be changed</li>
              <li>The counting will tell you that how many times the component rendered</li>

              <input ref={input} type="text" onChange={(e) => { setText(e.target.value) }} className="my-3" />

              <button onClick={handleclick}>Click</button>

              <h1> {text}<br />Render time : {count.current}</h1></div>

          </div>
        </div>



        <h3 className='my-3'>for more information click on the given Buttons</h3>
        <div class="d-flex justify-content-around my-3">

          <a href='https://youtu.be/qv2YPOnDwvA' className="btn btn-primary">useref (thapa technical)</a><br />
          <a href='https://youtu.be/zdQQraZEgnc' className="btn btn-primary">uncontrolled form using useref</a><br />
          <a href='https://www.w3schools.com/react/react_useref.asp' className="btn btn-primary">w3school</a><br />

        </div>
      </div>
    </>
  )
}
