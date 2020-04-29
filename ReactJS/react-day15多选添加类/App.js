import React from 'react';
import "./mock/index"
import Index from "./component/index"
import {Provider} from "react-redux"
import store from "./store/index"
import "./App/App.css"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Index/>
      </Provider>
      
    </div>
  );
}

export default App;
