import React from 'react'
import { useNavigate } from 'react-router'

export default function UseNavigate() {
  const navigate = useNavigate()
  const handleclick = () => {
    navigate("/")
  }
  document.title = "UseNavigation"

  return (
    <>
      <div className='container'>
        <h1 className='text-center my-3'><b>UseNavigate Hook</b></h1>

        <p>when we click on this given button we will reach to the useEffect page because we have put the useEffect location </p>
        <ul>
          <li>first we have create a button and put the onClick function<b> onClick = {`{handleClick}`}</b></li>
          <li>Then outside the function we have to create a variable <b>const navigate = useNavigate()</b></li>
          <li>Then <b>{`const handleClick = () =>{ navigate('/home')`}</b></li>
        </ul>
        <button onClick={handleclick}>click to navigate</button><p>when you click on that button you reached to the homepage</p>

        <h3>for more information click on the given Buttons</h3>

          <a href='https://youtu.be/1qPzmBlTlJQ' className="btn btn-primary mx-3" >navigat hook</a>
          <a href='https://youtu.be/CPdMl4CzgqY' className="btn btn-primary mx-3">technical thapa</a>
        </div>
      
    </>
  )
}
