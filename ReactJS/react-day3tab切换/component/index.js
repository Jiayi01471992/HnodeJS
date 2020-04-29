import React from 'react';
import requestPort from '../request';
import Nav from "../component/tab/Nav"
import Main from "../component/tab/main"
import axios from "axios"
class Cla extends React.Component{
  state={
    movieList:[],
    mainIndex:0
  }
  componentDidMount() {
    requestPort("/dataList").then(res=>{
      this.setState({movieList:res.movieList})
    })
  };
  CliIndex=(i)=>{
    this.setState({
      mainIndex:i
    })
  }
  render() {
    
    const {movieList} = this.state
    console.log(movieList)
    if(movieList){
       return <div className="box">
      <Nav i={this.CliIndex} data={movieList}/>
      <Main mainList={movieList[this.state.mainIndex]}/>
    </div>
    }
   
  };
}
export default Cla