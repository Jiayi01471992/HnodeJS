import React, { Component } from 'react'
import "./drag.min.css"
export default class Drag extends Component {
  state = {
    top:0,
    left:0,
    isDrag:false
  }
  mouseDown = (e)=>{
    let { clientX,clientY } = e;
    let { offsetTop,offsetLeft } = e.target
    let disX = clientX - offsetLeft;
    let disY = clientY - offsetTop;
    this.setState({
      isDrag:true
    })
    // console.log(disX,disY)
    document.addEventListener('mousemove', (evevt) => {
      if(this.state.isDrag){
         let { clientX,clientY } = evevt;
      // console.log(clientX,clientY);
      
      this.setState({
        left:clientX-disX,
        top:clientY-disY
      })
      }
     
    })
    document.addEventListener("mouseup",(e)=>{
      this.setState({
        isDrag:false
      })
    })
  }
  render() {
    const { top,left } = this.state
    // console.log(top,left);
    
    return (
      <div>
        <div className="drag" style={{top,left}} onMouseDown={this.mouseDown}>

        </div>
      </div>
    )
  }
}
