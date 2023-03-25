import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'

export default function Usestate() {
    const [text, setText] = useState('hello World')
    document.title = "UseState"

    return (
        <>
            <Navbar />
            <div className='container my-3' >
                <h2 className='text-center my-3'><b>UseState Hook</b></h2>

                <div className='container my-3'>
                    <div className='row'>

                        <div className='col-md-6'>
                            <img src='https://media.graphassets.com/AyJLadrgSFGtKmaeZuvU' alt='syntax' style={{ width: "480px", height: '250px' }} className="my-3" />
                        </div>
                        <div className='col-md-6'>
                            <h4 className='my-3'>Syntax of useState </h4>

                            <p><b>const [text,setText] = useState('hello world')</b></p>
                            <p>yahan pr <b>text</b> ki initial value "hello world" hy . <b>text</b> ki value update krny k liye hm <b>setText</b> ka use krain gy kuch is tra sy . <b>setText('hello pakistan')</b> ab text ki value update ho kr hello pakistan ho gai hy</p>
                            <p>jb bhi state update hoti hy tu component dobara render hota hy</p>

                            <b>Example</b>

                            <h4 className='my-3'>{text}</h4>

                            <button className='my-3' onClick={() => {
                                setText("hello Pakistan")
                            }}>Click</button>
                        </div>
                    </div>
                </div>

                <h3 className='my-3'>For more information click on the given Buttons</h3>
                <div class="d-flex justify-content-around my-3">
                    <a href='https://youtu.be/pYo_-HW29Ak' className="btn btn-primary">usestate hook with array</a>
                    <a href='https://youtu.be/rSgI_e5FVxM' className="btn btn-primary">usestate hook with objext</a>
                    <a href='https://www.w3schools.com/react/react_usestate.asp' className="btn btn-primary">usestate hook (w3 School)</a>
                </div>

                <img className='my-3' src='https://i.stack.imgur.com/wOPYH.png' alt='use' style={{ width: "980px", height: '550px' }} />

            </div>
        </>
    )
}
