// let's get start with class in typescript
// let's see example of class in typescript
class user_info{
    name:string;
    id:number;
    email:string="hitesh@gmail.com";
    fatherName:string="hitesh";
    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }
    other_info(email:string,fatherName:string){
        this.email=email;
        this.fatherName=fatherName
    }

}
// let's create object of class
let info=new user_info("sumit",5492)
info.email
info.fatherName
console.log(info)
export{}
// let's see some keywords in this
//    readonly email:string="hitesh@gmail.com";
//    this keyword is used to refer current object
//    constructor is used to initialize object when it is created
//    public,private,protected are access modifier in typescript


// second keyword
// private email:string="hitesh@gmail.com";
// private keyword is used to make variable private means it can't be accessed outside of class

// it is best practice to use public ur private instead of this keyword in typescript
// let see example
 
class sumit_info{
    constructor(public name:string,public email:string){
    }
}
// let's create object of class
let sumit=new sumit_info("sumit","sumit@gmail.com");
console.log(sumit);
// let's see another example of class in typescript
