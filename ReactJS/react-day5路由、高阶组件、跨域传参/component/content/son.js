import React from 'react';
import {Consumer} from "./content"
class Son extends React.Component{
  render() {
    return <Consumer>
      {
        (data)=>{
          return <div>
            {console.log(data)}
          </div>
        }
      }
    </Consumer>
  }
}
export default Son