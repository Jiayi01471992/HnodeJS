import React from "react"
import {Provider} from "./content"
import Father from "./father"
class Grand extends React.Component{
  state = {
    name:"lisi"
  }
  render() {
    return <Provider value={this.state}>
      <Father />
    </Provider>
  }
}
export default Grand