// import { render } from '@testing-library/react';
import './App.css';
// import elephant from "./images/elephant.jpeg";


function App(props) {
  // code here
  // console.log(props)

  return(
<div>
    <h1>Kalvium gallery</h1>
    <div>
      {props.image.map((e)=>{
        return <img src={e.img} alt='Elephant art'/>
      })
      }
    </div>
  </div>
  )
  
}

export default App;