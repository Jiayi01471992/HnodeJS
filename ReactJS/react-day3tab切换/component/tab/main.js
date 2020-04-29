import React from 'react';
class Main extends React.Component{
  render() {
    const {mainList} = this.props
    console.log(mainList)
    return <div className="box">
      {mainList?<img src={mainList.img} />:mainList}
      
     </div>
    
       
    }
   
  

}
export default Main