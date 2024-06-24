"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let's get start with class in typescript
// let's see example of class in typescript
var user_info = /** @class */ (function () {
    function user_info(name, id) {
        this.email = "hitesh@gmail.com";
        this.fatherName = "hitesh";
        this.name = name;
        this.id = id;
    }
    user_info.prototype.other_info = function (email, fatherName) {
        this.email = email;
        this.fatherName = fatherName;
    };
    return user_info;
}());
// let's create object of class
var info = new user_info("sumit", 5492);
info.email;
info.fatherName;
console.log(info);
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
var sumit_info = /** @class */ (function () {
    function sumit_info(name, email) {
        this.name = name;
        this.email = email;
    }
    return sumit_info;
}());
// let's create object of class
var sumit = new sumit_info("sumit", "sumit@gmail.com");
console.log(sumit);
