import React from 'react'
import Navbar from './Navbar'

export default function Hooks() {
    document.body.style.color = "white"

    return (
        <>
            <Navbar />
            <div className='container my-3 ' >


                <div className="row " >
                    <div className="col-md-4" style={{ margin: "10px 0px" }}>

                        <div className="card " >
                            <img className="card-img-top" src="https://daveceddia.com/images/youtube-hook-useState-thumb.png" alt="Card image cap" />
                            <div className="card-body ">
                                <h5 className="card-title">UseState Hook</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="http://localhost:3000/state" target="_blank" className="btn btn-primary">See More</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4" style={{ margin: "10px 0px" }}>

                        <div className="card ">
                            <img className="card-img-top" src="https://www.tutorialswebsite.com/wp-content/uploads/useeffect-hooks-in-reactjs.jpg" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">UseEffect Hook</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="http://localhost:3000/effect" target="_blank" className="btn btn-primary">See More</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4" style={{ margin: "10px 0px" }}>

                        <div className="card " >
                            <img className="card-img-top" src="https://dmitripavlutin.com/react-context-and-usecontext/cover.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">UseContext Hook</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="http://localhost:3000/context" target="_blank" className="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ margin: "10px 0px" }}>

                        <div className="card " >
                            <img className="card-img-top" src="https://dmitripavlutin.com/react-useref-guide/cover.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">UseRef Hook</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="http://localhost:3000/ref" target="_blank" className="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ margin: "10px 0px" }}>

                        <div className="card " >
                            <img className="card-img-top" src="https://dmitripavlutin.com/react-usereducer/cover.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">UseReducer Hook</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="http://localhost:3000/reducer" target="_blank" className="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4" style={{ margin: "10px 0px" }}>

                        <div className="card " >
                            <img className="card-img-top" src="https://i0.wp.com/programmingfields.com/wp-content/uploads/2022/08/Form-Handling-using-react-hook.png?fit=2240%2C1260&ssl=1" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">UseNavigate Hook</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="http://localhost:3000/navigate" target="_blank" className="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
