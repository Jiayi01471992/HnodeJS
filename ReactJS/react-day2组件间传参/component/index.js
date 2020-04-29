import React from "react"
import Img from "../static/img/1.jpg"
import "../static/css/index.min.css"
import Logos from "./logo/logo"
class Cla extends React.Component{
  constructor(props){
    super()
    console.log(this)
    
  }
  static defaultProps={

  }
  state={

  }
  render() {
    return <div className="box">
      <img src={Img}/>
      <Logos />
      
    </div>
  }
} 
export default Cla