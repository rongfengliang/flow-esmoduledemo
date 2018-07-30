import  user,{app,createuser} from "./user"
import api from "./api"
import extendapp  from "./extendapp"
console.log(user);
console.log(app)
const inituser =createuser("dalongdemoapp", 11)
console.log("extend app",extendapp)
const info2 = {
    user:inituser
}
const info = [{
    user:inituser
    }
]
var demoapp ={
    user:{
        ...inituser
    }
}
var approng = [
    ...info
]
var ob ={}
Object.assign(ob, inituser);
console.log("ob",ob)
console.log(approng)
console.log(api(info2))
console.log(api(demoapp))