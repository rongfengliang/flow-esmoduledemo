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
type applogin ={
    apptype:string,
    apptoken:string
}

export {user,app,createuser}

export default (name:string,age:number):initUser =>{
   return {
      name:name,
      age:age
   }
}