// let's study enum in typescript
// enum is a value type that represents a set of named values
enum color{
    ball="red",
    grass="green",
    tali="yellow",
}

const pub=color.ball;
console.log(pub); // output: red
export{}

// but its better to use const to initialize  the enum variable
// because enum is not a type in typescript, it's a value type
// so we can't use it as a type
const enum book_seat{
    first="1",
    second="5",
    third=5,
}

const sumit=book_seat.third;
