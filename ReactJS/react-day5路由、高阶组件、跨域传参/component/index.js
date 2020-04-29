import React from 'react';
import mock from "../mock/index";
import axios from "axios"
class Cla extends React.Component{
  state = {
    dataList:[]
  }
  render() {
    return <div>
      {
        this.state.dataList.map((item,index)=>{
          return <div key={index}>
            {item.id}
            {item.name}
          </div>
        })
      }
    </div>
  }
  componentDidMount() {
    axios.get("/dataList").then(res=>{
      console.log(res.data)
      this.setState({
        dataList:res.data.list
      })
    })
  }
}
export default Cla