// let's learn types in typescript 
// typescript is a statically typed language
// typescript is a superset of JavaScript
// typescript is used for developing large-scale applications
// let declare the simple hello word variable
let hello="hello world iam typescript"

let number:number=45612;
let isLoggedIn:boolean=false;
console.log(number)
console.log(hello);

// let's learn how the type script react in functions
let hero:string;
function get_hero(){
    return "iam Thor"
}
// if you now see the type of hero by hovering in it
// you will get type any
hero=get_hero();
// to resolve this type of behavior we should menton the type
// example: hero:string;

//let's dive into the typescript function 
// let's create simple addition function which add two number
function add(num){
    return num+5;
}
// if we pass the argument to the function and hover to the the passed 
//variable then you can see it will show the type any instead of number
add(5)// it shows the type any
// to resolve this we should mention the type of the function parameter
// just specify type to  parameter  
function addition(num:number){
    return num+5;
}
addition(5);
// now if you hover to the num variable it will show the type number
export{}

// let's see the void type in typescript 
// void is type used in function whenever the function having empty data ur not returning anything
// then we use void type for function 
// example 
function name(name:string):void {
    console.log(name)
} 
// here the function name is not returning anything so we use void type
 
type  user={
    readonly name:string,
     age:number,
     occupation:string,
 }
 const info:user={
     name:"john",
     age:30,
     occupation:"software engineer",
 }
 // if we use readonly in the property declaration then we can change the value of it\
 // example
 // info.name="sumit"
