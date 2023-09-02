
let num = 2;
console.log(num)

let myName = 'Jonathan';
console.log(typeof myName)

x = 5;
y = 6;
z = x + y;
console.log(z);

let thisNumber = 9007199254740994456398434n;
console.log(thisNumber);

let bigInt = BigInt(90071992547409944563984343759);
console.log(bigInt);

let car ;
console.log(typeof car);

let foo = null;
console.log(typeof foo);

// objects

let newCar = {brand: 'Toyota', model: 'Camry', color: 'Blue'}

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const newPlayer = {
  firstName: "Cristiano",
  lastName: "Ronaldo",
  age: 39,
  eyeColor: "black",
  team: 'Al Nasa'
};

const playerFirstName = newPlayer.firstName;
const playerLastName = newPlayer.lastName;
const playerAge = newPlayer.age;
console.log(playerFirstName, playerLastName, playerAge);

// alert(playerFirstName)
const playerEyeColor = newPlayer['eyeColor']
console.log(playerEyeColor);
console.log(playerEyeColor, typeof newPlayer);

//1. write an object property of two players properties in Man u including their firstname, lastname, team, age, eyecolor, birthdate.

//2. then access the first players firstname, lastname, team and birthdate, and log it to the console using the objectName.propertyName
//3. do the same thing for the second player but access it's value using the square bracket


// Arrays

const car1 = 'Toyota';
const car2 = 'Mercedes';
const car3 = 'Honda';

console.log(car1, car2, car3);

const cars = []
cars[0] = "Toyota";
cars[1] = "Mercedes";
cars[2] = "Honda";
cars[3] = 'Mistubishi'

console.log(cars);

const footballTeam = ['chelsea', 'Arsenal', 'mancity', 'Man-u', 'Liverpool']
footballTeam[1] = 'Real Madrid'

console.log(1, footballTeam[0]);
console.log(2, footballTeam[1]);
console.log(3, footballTeam[2]);
console.log(4, footballTeam[3]);
console.log(typeof footballTeam);

// write an array of 8 different types of countries, then access each array using the index

// difference between arrays and objects
// arrays use numbers to access it's elements
// Objects use names to access its "members"

// array
const firstPerson = ["John", "Doe", 46];
console.log(firstPerson[0], firstPerson[1]);

// object
const secondPerson = { firstName: "John", lastName: "Doe", age: 46 };
console.log(secondPerson.firstName, secondPerson.lastName);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruitLength = fruits.length;
console.log(fruitLength);


// javascript string methods

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let textLength = text.length;
// console.log(textLength);

// // JavaScript String slice()

// let fruitText = "Apple, Banana, Kiwi";
// let part = fruitText.slice(7, 13);
// console.log(part);
// part = fruitText.slice(0);
// console.log(part);
// part = fruitText.slice(-5);
// console.log(part);

// // JavaScript String toUpperCase()

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);
// let text3 = text1.toLowerCase();
// console.log(text3);

// let text4 = "Hello world, welcome to the universe.";
// let text4Result = text4.indexOf("welcome")
// console.log(text4Result);


















