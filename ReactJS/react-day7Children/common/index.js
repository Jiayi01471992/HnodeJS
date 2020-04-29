class Watch {
  constructor() {
    this.obj = {}
  }
  on(key,callback){
    this.obj[key] = callback
    
  }
  emit(key,value){
    if(this.obj[key]){
      this.obj[key](value)
    }
  }
}
 export default new Watch()