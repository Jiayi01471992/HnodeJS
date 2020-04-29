import React, { Component,Children,createRef } from 'react';
import swiper from "swiper"
import "swiper/css/swiper.min.css"
import "./swiper.min.css"
class Swiper extends Component{
  componentDidMount() {
    new swiper(".swiper-container",{
      autoplay:true,
      loop:true
    })
    // console.log(this.swiper)
    console.log(this.refs)
  }
  constructor(props){
    super(props)
    this.swiper = createRef()
    console.log(this.swiper)
    
  }
  render() {
    return <div className="main">
      {/* <div className="swiper-container" ref={this.swiper}> */}
      <div className="swiper-container" ref={el=>this.refs=el}>
        <div className="swiper-wrapper">
          {/* 组件外传来的项目引用Children */}
          {
            Children.map(this.props.children,(item,index)=>{
              return <div className="swiper-slide">{item}</div>
            })
          }
          {/* <div className="swiper-slide">123123</div>
          <div className="swiper-slide">123123</div>
          <div className="swiper-slide">123123</div>
          <div className="swiper-slide">123123</div>*/}
        </div> 
      </div>
    </div>
  }
}
export default Swiper
