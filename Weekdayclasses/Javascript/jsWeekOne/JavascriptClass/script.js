// x = 5;
// y = 6;
// z = x + y;

// var surname = 'Nonso';

// console.log(surname);

// console.log(z);

// var x = 5;
// var y = 2;

// var z = x + y;
// console.log(z);

// The var can be redeclared

// var firstName = 'Moses';
// console.log(firstName);
// var firstName = 'Deji';
// console.log(firstName)
// var firstName = 'Tobi';
// console.log(firstName)


// let randomName = 'Samuel';
// console.log(randomName);

// randomName = 'Daniel';
// console.log(randomName);

// const newName = 'Francis';
// console.log(newName);

// newName = "Daniella";
// console.log(newName);


// const x = 5;
// const y = 6;
// const z = x + y;
// console.log(z);
// z = 1;
// console.log(z);

// let car = 'toyota';

//  Examples;
//  // Numbers:
//  let length = 16;
//  let weight = 7.5;

//  // Strings:
//  let color = "Yellow";
//  let lastName = "Johnson";

//  // Booleans
//  let x = true;
//  let y = false;

//  // Object:
//  const person = { firstName: "John", lastName: "Doe" };

//  // Array object:
//  const cars = ["Saab", "Volvo", "BMW", 6, true , ];

//  // Date object:
//  const date = new Date("2022-03-25");


//  let x = 16 + "Volvo";
//  console.log(x);

// let a = 10;
// let b = 20;
// const c = a + b;
// console.log(c);

// let firstName = 'joseph';
// let surname = 'Morgan';
// let fullName = firstName + ' ' + surname;
// console.log(fullName);

// let occupation = "i am a web developer";
// let hobby = " and i like to code with javascript";

// occupation = occupation + hobby;
// occupation += hobby;
// console.log(occupation);

// let x = 1.5 + 4 ;
// let y = 52 - 10;
// const z = x + y;
// console.log(z);


// javascript BigInt


// let thisNumber = 1234567891234567891233455893473458058n;
// console.log(thisNumber);

// Booleans are true or false

// let x = 5;
// let y = '5';
// let z = 6;

// let a = x == y;
// let b = z == x;

// console.log(a);
// console.log(b);
// console.log(typeof x);
// console.log(typeof y);
// console.log( b);

// Undefined

// let c ;
// console.log(c);

// c = '';
// console.log(typeof c);

// // Null

//  let foo = null;
//  console.log(foo);
//  console.log(typeof foo);


//  objects

// Real Life Objects, Properties, and Methods
// In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop:

// All cars have the same properties, but the property values differ from car to car.
// All cars have the same methods, but the methods are performed at different times.
// objects can also be assigned to variables

// let car = 'Toyota';
// const car = {type: 'Toyota', model: 'Camry', color: 'white'};

// console.log(car);
// console.log(typeof car);

// const person = {firstName: 'Cristiano',
//  lastName: 'Ronaldo',
//  age: 38,
//  eyeColor : 'black',
//  team: 'Al Nasa',
// };

// const newPerson = {
//   firstname: "Cristiano",
//   lastname: "Ronaldo",
//   age: 38,
//   eyeColor: "black",
//   team: "Al Nasa",
// };
// console.log(newPerson);

// Accessing Object Properties
// You can access object properties in two ways:

// let newPersonLastname = newPerson.lastname;
// console.log(newPersonLastname);

// let newPersonFirstname = newPerson.firstname;
// console.log(newPersonFirstname);

// let newPersonEyeColor = newPerson["eyeColor"];
// console.log(newPersonEyeColor);
// let newPersonTeam = newPerson['team']
// console.log(newPersonTeam);

//1. write an object property of two players properties in Man u including their firstname, lastname, team, age, eyecolor, birthdate, position.

//2. then access the first players firstname, lastname, team and birthdate, position and log it to the console using the objectName.propertyName
//3. do the same thing for the second player but access it's value using the square bracket

// Arrays
// An array is a special variable, which can hold more than one value:
// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
// Note: Array indexes start with 0.

// let car1 = 'Volvo';
// let car2 = 'BMW';
// let car3 = "Mercedes-Benz";

const cars = ['Volvo', 'Bmw', 'Mercedes-Benz' ]

let cars1 = cars[2];
console.log(cars1);
let numberOfCars = cars.length
console.log(numberOfCars);

// It is a common practice to declare arrays with the const keyword.

const newCars = [];

newCars[0] = 'Tesla';
newCars[1] = 'Lambo';
newCars[2] = 'Ford';
newCars[3] = 'Toyota';

console.log(newCars);

const footballTeam = ['Man-u', 'Man-city', 'Chelsea', 'Arsenal']

footballTeam[4] = 'Real-Mardrid';
footballTeam[0] = 'Liverpool';

console.log(footballTeam);

// create an empty array, then put in 5 different fruits, the length of the array is 5 and the index is 4.
//1. calculate the length of the fruits array and log it to the console
//2. add two more fruits to the end of the array, so now we have 7 length of the array,
// 3. replace the first and third fruit with a new fruit white the length of the array is 7

// Arrays can also hold other values like numbers, strings, booleans, characters, objects and so on

const otherDataArrays = [true, false, 4, 1.5, 'Strings', {firstname: 'John', lastname: 'Doe'}];

console.log(otherDataArrays);



















