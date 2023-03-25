import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


export default function UseEffect() {

    const [text, setText] = useState('Wait.....')
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(count + 1)
        if (count === 3000) {
            setText("Now move on to the next")
            setCount(count)

        }

    }, [count])

    document.title = "UseEffect"

    return (
        <>


            <div className='container my-3' >
                <h1 className='text-center'><b>UseEffect Hook</b></h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img className='my-3' src='https://ihatetomatoes.net/wp-content/uploads/2020/05/02-react-hook-useEffect.png' alt='useEffect' style={{ width: '98%' }} />




                        </div>

                        <div className='col-md-6'>
                            <h4 className='my-3'>Syntax of useEffect </h4>
                            <p><b>useEffect(callback function , dependancy array)</b></p>
                            <p>useEffect component k render hony k baad run hota hy</p>
                            <p>jb counting 3000 tk jaey gi tu ruk jaey gi aur text change ho jaey ga</p>
                            <p>jb jb usestate ki value update ho gi ,useEffect run ho ga ,component k render honey k baad</p>

                            <h3><b>Example</b></h3>
                            <h2>{text}</h2>
                            <h2>{count}</h2>
                        </div>
                    </div>
                </div>

                <h3 className='my-3'>for more information click on the given Buttons</h3>

                <div class="d-flex justify-content-around my-3">
                    <a href='https://www.w3schools.com/react/react_useeffect.asp' className="btn btn-primary">useEffect w3 school</a>
                    <a href='https://youtu.be/ZbUcN0LBqwY' className="btn btn-primary">useEffect thapa Technical</a>
                    <a href='https://youtu.be/rvtneYB7Fxo' className="btn btn-primary">useEffect thapa Technical</a>
                </div>



            </div>
        </>

    )
}
