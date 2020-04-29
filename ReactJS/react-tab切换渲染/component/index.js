import React from 'react';
class Tab extends React.Component{
  state = {
    tabList:["热门推荐","鲜花","永生花","蛋糕","巧克力"],
    isTab:0,
    rendList:[1,2,3,4,5],
    rendIndex:0
  }
  style = (index)=>{
    if(this.state.isTab!==index){
      this.setState({
      isTab:index
      })
    }
    
  }
  Index = (index)=>{
    this.setState({
      rendIndex:index
    })
  }
  render() {
    return <div className="wrap">
      <div className="left">
        <ul>
          {this.state.tabList.map((item,index)=>{
            return <li key={index} onClick={()=>{this.Index(index); this.style(index)}} className={this.state.isTab===index?"active":""}>{item}</li>
          })}
        </ul>
      </div>
      <div className="right">
          <div>
            {this.state.rendList[this.state.rendIndex]}
          </div>
      </div>
    </div>
  }
}
export default Tab