let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

apples = 10;

//build in objects
let now: Date = new Date();
// can only assign the now variable to a type of Date

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
   x: 10,
   y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
   console.log(i);
};

// When to use annotations
// 1) function that returns the 'any' type

const json = '{"x":10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'blue', 'green'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
   if (words[i] === 'green') {
      foundWord = true;
   }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > 0) {
      numberAboveZero = numbers[i];
   }
}
