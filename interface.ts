// let's study interface in typescript
// interface is a way to define a blueprint of an object    
interface obj{
    name:string,
    age:number,
    address:string,
    fun:()=>string|number;
}
// let's see inheritance 
interface obj{
    height:number
}
// you can also extends the interface let's see
interface obj2 extends obj{
    weight:number
}
// now we can create an object that follows this blueprint
let object:obj2 ={
    weight:50,
    height:5.6,
    name:"John",
    age:30,
    address:"New York",
    fun:()=>{
       return `sumit having money ${5000000} in bank ` 
    }
}


export{}