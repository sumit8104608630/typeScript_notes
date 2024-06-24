// let's get start with the object's in typescript
// objects in typescript are similar to objects in JavaScript
const obj={
    name:"sumit",
    age:25,
    occupation:"software engineer",
}
// let's see how we pass the object in function in typescript
// there is two way to pass the object
// let's see first way
function createUser({name:string,isPaid:boolean}){
}
createUser({name:"sumit",isPaid:true});// in this case it show the error to resolve it
// we have to add the email property in the function parameter
// let's see second way
function createCourse():{name:string,complete:boolean}{
    return {name:"sumit",complete:true}
}
createCourse()

// let's study type in typescript
// let' study with example


export{}