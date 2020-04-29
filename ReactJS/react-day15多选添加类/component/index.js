import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from "react-redux"
class Index extends Component {
    
    
    render() {
        
        return (
            <div className="ul">
                <div className="Top"></div>
                <ul>
                    {
                        this.props.dataList.map((item, index) => {
                            return <li key={index} className={item.cla?"active":""}>
                                <img src={item.src} alt="" />
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <span className="add" onClick={() =>{this.props.addClass(item)}}>+</span>
                                <button>add to cart</button>
                            </li>

                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        Axios.get("/list").then(res => {
            this.props.AddCart(res.data)
        })
    }
}




let mapStateToPropage = (state) => {
    return {
        dataList: state.CartStore.dataList,
        
    }
}

let mapDispatchPropage = (dispatch) => {
    return {
        AddCart(res){
            dispatch({
                type:"ADD_CART",
                value:res
            })
        },
        addClass(item) {
            dispatch({
                type:"CHANGE",
                item

            })
        }
    }
}

export default connect(mapStateToPropage,mapDispatchPropage)(Index)