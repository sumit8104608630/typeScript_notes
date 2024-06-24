// let's dive into  array in the typescript
// array is a collection of similar data types
// let's create an array of numbers
let array:number[]=[];
// if now you can see it will show all the array method and properties
// let's add some elements to the array
array.push(10,5,6,8,3,2,1)
// now let's see the array
console.log(array);
// let's se second way 
let array2:Array<number>=[1,2,3,4,5];
// let's see the array
console.log(array2);
// let's try nested  array
let nestedArray: number[][]=[];
nestedArray.push([1,2,3],[4,5,6],[7,8,9]);
console.log(nestedArray);

export{}