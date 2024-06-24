"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let's get start with the object's in typescript
// objects in typescript are similar to objects in JavaScript
var obj = {
    name: "sumit",
    age: 25,
    occupation: "software engineer",
};
// let's see how we pass the object in function in typescript
// there is two way to pass the object
// let's see first way
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "sumit", isPaid: true });
