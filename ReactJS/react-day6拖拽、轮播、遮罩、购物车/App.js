import React from 'react';
import Swiper from "./component/swiper/Swiper"
import Mask from "./component/mask/index"
import Drag from "./component/Drag/drag"
import Cart from "./component/Cart/Cart"
import "./app.min.css"
function App() {
  return (
    <div className="App">
      {/* <Mask /> */}
      <Swiper>
      <div>123</div>
      <div>345</div>
      <div>456</div>
      </Swiper>
      {/* <Drag /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
