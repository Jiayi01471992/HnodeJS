import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import List from "../index";
import Grand from "../content/grand"
import Son from "../content/son"
class Routers extends React.Component{
  render() {
    return <BrowserRouter>
      <Route path="/list" component={List} /> 
      <Route path='/context' component={Grand} />
      <Route path='/son' component={Son} />
    </BrowserRouter>
  }
}
export default Routers