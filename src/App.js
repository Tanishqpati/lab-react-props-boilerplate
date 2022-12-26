import { render } from '@testing-library/react';
import './App.css';
import elephant from "./images/elephant.jpeg";

// const imageData = ()=>{
//   let data = [
//     {
//       id:1,
//       img:elephant
//     },
//     {
//       id:2,
//       img:elephant
//     },
//     {
//       id:3,
//       img:elephant
//     },
//     {
//       id:4,
//       img:elephant
//     }
//   ]
//   return data;
// }

function App(props) {
  // code here

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