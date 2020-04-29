import React from 'react';
class Hei extends React.Component{
  render() {
    return <div className="box">
      <h1>你在他乡还好吗</h1>
    </div>
  }
}
function Con(Hei) {
  class A extends React.Component{
    render() {
      return <div className="slide">
        <Hei />
      </div>
    }

  }
  return A
}
Hei = Con(Hei)
export default Hei