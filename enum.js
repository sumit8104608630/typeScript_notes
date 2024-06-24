"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let's study enum in typescript
// enum is a value type that represents a set of named values
var color;
(function (color) {
    color["ball"] = "red";
    color["grass"] = "green";
    color["tali"] = "yellow";
})(color || (color = {}));
var pub = color.ball;
console.log(pub); // output: red
var sumit = 5 /* book_seat.third */;
