import React, { Component } from 'react'
import Navbar from './Navbar'

export default class RCC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "hello world",
      count: 10
    }
    document.body.style.color = "white"

  }

  componentDidMount() {
    this.setState({ count: this.state.count + 1 });

  }

  render() {
    return (
      <>
        <Navbar />
        <div className='container'>

          <h1 className='text-center'>React Class Based Component {this.state.count}</h1>

          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <img src='https://dotnettrickscloud.blob.core.windows.net/img/react/react-classbase%20com.png' alt='rcc' style={{ width: "96%", height: " 66%" }} />
                <p><b>Example : </b>here we use this.setState to change the text </p>
                <h3>{this.state.text} </h3>
                <button onClick={() => { this.setState({ text: "hello pakistan" }) }}>click to change the text</button>
                <h3>here we are passing the props using <b>{this.props.heading}</b></h3>
              </div>

              <div className='col-md-6'>
                <p>React Class components have a built-in state object. You might have noticed that we used state earlier in the component <b>constructor section</b>. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.</p>

                <img src='https://cdn-media-1.freecodecamp.org/images/1*N2KU7pOcwZwKeOi3B-YBLQ.png' alt='..' style={{ width: "100%", height: " 40%" }} />
                <li>in Class Based component we use life cycle methods</li>
                <b><li>componentDidMount()</li>
                  <li>componentDidUpdate()</li>
                  <li>componentWillUnmount()</li></b>
                <img src='https://programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM-1024x567.png' alt='..' style={{ width: "100%", height: " 42%" }} />


              </div>
            </div>
          </div>

        </div>

      </>
    )
  }
}
