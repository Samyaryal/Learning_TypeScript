let  apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects 
let now: Date = new Date();

//Array
let colors: string[]=['red', 'green', 'blue'];
let myNumbers: number[] =[1, 2, 3];
let truths: boolean[] = [true, false, true];

//Classes
class Car{}
let car:Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//Function
const logNumber: (i: number) => void = (i: number) =>{
  console.log(i);
};

//when to use annotations
// 1) function that returns the type 'any'
const json = '{"x": 10, "y" :20} ';
const coordinates : {x: number, y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line 
// and initialize it later
let words = [ 'red', 'green', 'blue'];
let foundword : boolean; 
for (let  i = 0; i <words.length; i++) {
  if (words[i] === 'green'){
    foundword  = true;
  }
}

//variable whose type cannot be iinferred correctly 
let numbers = [-10, -20, 10 ];
let numberAboveZero: boolean | number = false; 
for (let i = 0; i <numbers.length; i++){
  numberAboveZero = numbers[i];
}