// let's see union in typescript 
// union in typescript is used to define a type that can be one of multiple types
// it is denoted by the pipe symbol (|)
// example :
let id:number|string=55;
// let assign a string value
id="55";
// it also allow ;
// so we can use multiple data type by using this approach
// let see more example 
let data:number|string|boolean=true;
// now data can be number , string or boolean
// one more example
let num:number=55;
let statement :number|string=`my age is ${num}`
// here statement can be number or string
console.log(statement);
// let's see in the array
let array:(string|number)[]=[4,5,7,8,9,"sumit","sharma",10]
// here array can hold both string and number you can try with boolean also

// lt's see in function
function add():number|string{
 let addition=`addition of 5++${5+5}`
 return addition
}
console.log(add);
// here function return type can be number or string