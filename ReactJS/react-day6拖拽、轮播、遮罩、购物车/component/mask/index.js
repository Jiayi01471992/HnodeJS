import React, { Component } from 'react'
import "./mask.min.css"
export default class Mask extends Component {
  state = {
    isBlock:false
  }
  block = ()=>{
    this.setState({
      isBlock:true
    })
  }
  render() {
    return (
      <div className="mask" style={{display:this.state.isBlock?"none":"block"}}>
        <div className="inbox">
        <h1>留给他人传唱</h1>
          <div className="tab">
            <button onClick={this.block}>确定</button>
            <button>取消</button>
          </div>
          
        </div>
      </div>
    )
  }
}
