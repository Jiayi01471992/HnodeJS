import dataList from "./mock/mock"
function requestPort(url){
  return new Promise(res=>{
    res(dataList[url]())
  })
}
export default requestPort