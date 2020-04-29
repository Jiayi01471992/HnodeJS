const Mock = require("mockjs")
let list = [];
for(let i=0; i<5;i++){
  list.push({
    di:i,
    name:Mock.Random.ctitle(3)
  })
}
Mock.mock("/dataList",{list})
