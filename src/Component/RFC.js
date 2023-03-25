import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function RFC() {
  document.body.style.color = "white"

  const [count, setCount] = useState(0);
  useEffect(

    () => {
      setCount(count + 1)
      if (count === 1000) {
        setCount(count)
      }

    }, [count]
  )
  return (
    <>
      <Navbar />
      <div>

        <h1 className='text-center'>React Function Based Component {count}</h1>
        <div className='container'>
          <div className='row my-3'>
            <div className='col-md-6'>

              <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gVlkQ3ew--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/efvl5amf9yqhquvwvx6k.png" alt='..' style={{ width: "550px", height: "370px" }} />
            </div>
            <div className='col-md-6'>
              <p>Functional component is just a simple javascript function; it accepts the data in the form of props and returns the react element. Whereas the class component will be created using the class keyword, and it extends the React. Component to make the class as a react component.</p>
              <li>In function we use <b>useEffect</b> hook instead of using  React lifecycle methods such as <i>"componentDidMount","componentDidUpdate","componentWillUnmount"</i></li>

              <li>we use state as const[text,setText]=useState("hi") </li>
              <li>use simply use props,state instaed of this.props,this.state</li>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
