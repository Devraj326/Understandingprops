import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{


  render(props){
    const imgData = this.props.myData();
    return(
      <div>
        <div><h2> Kalvium gallary</h2></div>
      <div className='imagee'>
        {imgData.map((item)=>{
          return <img key={item.id} src={item.img}/>
        })}
      </div>
      </div>
       )
      }
}


