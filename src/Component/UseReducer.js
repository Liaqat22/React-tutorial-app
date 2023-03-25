import React, { useReducer } from 'react'

const initialstate = 0
const reducer = (state, action) => {
    switch (action) {
        case "inc":
            return state + 1
        case "dec":
            return state - 1

        case "clear":
            return state * 0
        default:
            return state;
    }
}

export default function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialstate)
    document.title = "UseReducer"
    return (
        <>
            <div className='container my-3' >
                <h1 className='text-center my-3'><b>UseReducer Hook</b></h1>

                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'><img className='my-3' src='https://dmitripavlutin.com/react-usereducer/cover.png' alt='reducer' style={{ width: "490px", height: '260px' }} />
                        </div>
                        <div className='col-md-6'>
                            <h2 >Syntax</h2>
                            <p><b>const[count,dispatch] = useReducer(reducer,initialstate)</b></p>
                            <p>then outside the function <b>const initialstate = 0 <br />const reducer =(state,action) {"=>"}{
                                `{ here we have to put the logic }`}  </b> </p>
                            <p>The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.<br />
                                The useReducer Hook returns the current stateand a dispatchmethod.</p>

                            <b>Example</b>

                            <h2 className='mx-3 '>{count}</h2>
                            <button onClick={() => dispatch("inc")}>increment</button>
                            <button onClick={() => dispatch("dec")}>decrement</button>
                            <button onClick={() => dispatch("clear")}>clear</button>
                        </div>

                        <div className='col-md-6'> <img className='my-3' src='https://i.ytimg.com/vi/RZPAQV7JvNU/maxresdefault.jpg' alt='reducer' style={{ width: "500px", height: "500px" }} /></div>

                        <div className='col-md-6'>
                            <br />  <p>The useReducer Hook is similar to the useState Hook.<br />
                                It allows for custom state logic.<br />
                                If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</p>

                            <h3>for more information click on the given Buttons</h3>
                            <div class="d-flex justify-content-around my-3">

                                <a href='https://youtu.be/TlSJVL3dvRM' className="btn btn-primary">usereducer </a>

                                <a href='https://www.w3schools.com/react/react_usereducer.asp' className="btn btn-primary">W3 school </a>
                            </div></div>

                    </div>
                </div>






                <br />


            </div>
        </>
    )
}
