import React, { Component } from 'react'
import Mock from "../../mock/mock"
import axios from "axios"
import "./cart.min.css"
export default class Cart extends Component {
  state = {
    dataList:[],
    total:0
  }
  componentDidMount() {
    axios.get("/list").then(res=>{
      console.log(res.data)
      this.setState({
        dataList:res.data.data
      })
      
    })
  }
  add = (id)=>{
    let list = this.state.dataList.filter(item=>item.id===id)[0]
    list.count++
    console.log(list)
    this.setState({
      dataList:this.state.dataList
    })
    this.total(this.state.dataList)
  }
  sub = (id)=>{
    let list = this.state.dataList.filter(item=>item.id===id)[0]
    if(list.count<=0)return
    list.count--
    console.log(list)
    this.setState({
      dataList:this.state.dataList
    })
    this.total(this.state.dataList)
  }
  total = (val)=>{
    let total = 0;

    val.forEach(item=>{
      total+=item.count*item.price
    })
    this.setState({
      total:total
    })
  }
  render() {
    return (
      <div className="wrap">
        <div className="main">
          <div className="content">
            <ul>
            {this.state.dataList.map((item,index)=>{
              return <li key={index}>
                <p>{item.id}:{item.title}</p>
                <p>{item.price}</p>
                <span onClick={()=>{this.sub(item.id)}}>-</span>
                <span>{item.count}</span>
                <span onClick={()=>{this.add(item.id)}}>+</span>
              </li>              
            })}
            </ul>
          </div>
        </div>
        <div className="footer">
            <h2>总价：{this.state.total}</h2>
        </div>
      </div>
    )
  }
}

