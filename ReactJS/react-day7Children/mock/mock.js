import Mock from "mockjs"
let data = []
for(let i=0; i<10; i++){
  data.push({
    id:i,
    title:Mock.Random.ctitle(3),
    price:50*i,
    count:0
  })
}
Mock.mock("/list",{data})