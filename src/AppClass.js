import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  // imageData = ()=>{
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

  // code here
  render(){
    return(
      <div className="container">
          <h1>Kalvium gallery</h1>
          <div className="imagesContainer">
            {this.imageData().map((e)=>{
              return <img className="images" src={e.img} alt='Elephant art'/>
            })
            }
          </div>
        </div>
        )
  }
}
