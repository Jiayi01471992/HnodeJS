import { changeExt } from "upath"

let initState={
    dataList:[],
    newData:[],
    obj:{}
}

let rducter={
    ADD_CART(state,action){
        state.dataList = action.value
    },
    CHANGE(state,action){
        let goods = state.newData.filter(v=>v.id==action.item.id)[0]
        console.log(goods);
        
        if(!goods){
            state.newData.push(action.item)
            state.dataList=state.dataList.map(v=>{
                console.log(v,action.item.id);
                
                if(v.id==action.item.id){
                    v.cla = true    
                }
                return v
            })
        }

        
    }
}

export default function(state=initState,action){
    let newState={...state}
    rducter[action.type]&&rducter[action.type](newState,action)   
    return newState
}