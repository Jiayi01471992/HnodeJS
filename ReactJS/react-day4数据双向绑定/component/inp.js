import React from 'react';
class Ipts extends React.Component{
  state={
    text:"",
    arr:[]
  }
  add=(text)=>{
    let { arr }= this.state
    if(text!=""){
      arr.push(text)
    }
    
    this.setState({
      arr
    },()=>{
      this.refs.inputs.value=""
    })
    
  }
  render() {
    return <div className="box">
      <input ref="inputs" onChange={()=>{}} type="text"/>
      <button onClick={()=>{this.add(this.refs.inputs.value)}}>点击</button>
      
        {this.state.arr.map((item,index)=>{
          return <div key={index}>
            {item}
          </div>
        })}
      
    </div>
  }
}

export default Ipts