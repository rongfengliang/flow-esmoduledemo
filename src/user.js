// @flow

type initUser = {
    name: string,
    age:  number
}

const user = {
  name:"dalong",
    age:33
}
const app ={
    appname:"dalong",
    appversion:1
}
const createuser =(name:string,age:number):initUser=>{
  return {
      name:name,
      age:age
}
}
export default  user

export {user,app,createuser}