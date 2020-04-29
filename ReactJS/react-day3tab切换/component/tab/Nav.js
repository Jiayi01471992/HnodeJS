import React,{Component} from 'react';
class Nav extends Component{
  state={
    activeIndex:0
  }
  tab=(index)=>{
    console.log(this)
    this.props.i(index)
    this.setState({activeIndex:index})
  }
  render() {
    const {data} = this.props;
    return <div className="nav">
      {
        data.map((item,index)=>{
          return <div 
          className={["item",this.state.activeIndex==index?"active":""].join(" ")}
           key={index}
           onClick={()=>{this.tab(index)}}
           >
            {item.nm}
          </div>
        })
      }
    </div>
  }
}
export default Nav