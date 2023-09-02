// JavaScript is the world's most popular programming language.
// JavaScript is the programming language of the Web.
// JavaScript is easy to learn.

// What Is JavaScript? JavaScript (JS) is a cross-platform, object-oriented programming language used by developers to make web pages interactive. It allows developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, control multimedia, etc.

// *Javacript Variables
// Variables are Containers for storing Data

// Automatically
// Using var
// Using let
// Using const

// Declaring a variable Automatically
// In this first example, x, y, and z are undeclared variables.
// They are automatically declared when first used:
// x = 15 ;
// x = 13;
// y = 10 ;
// z = x + y ;
// console.log(z);

// Declaring a variable using Var
// Note
// It is considered good programming practice to always declare variables before use.
// variable declare with var, can be re-declared and reassigned
// var x = 15;
// var x = 12;
// var y = 20;
// var z = x + y;
// console.log(z);

// Using let
// you can reasign using let, but you can't redeclare
let x = 12;
 x = 9;
 x = 4;
let y = 15;
let z = x + y;
console.log(z);

// Using const
// using const you can reasign or redeclare a variable

const a = 20;
const b = 13;
const c = a + b;
console.log(c);

// When to Use var, let, or const?
// 1. Always declare variables
// 2. Always use const if the value should not be changed
// 3. Always use const if the type should not be changed (Arrays and Objects)
// 4. Only use let if you can't use const
// 5. Only use var if you MUST support old browsers.

// JavaScript Identifiers
// All JavaScript variables must be identified with unique names.
// These unique names are called identifiers.
// Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
// The general rules for constructing names for variables (unique identifiers) are:
// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

// **JavaScript Data Types
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Object
// 8. Array

// 1. String
// string can have either double quotes or single quotes

let X = 'volvo';
let Y = "Hello World"
console.log(typeof X, X);
console.log(typeof Y, Y);

// 2. Number
let A = 34;
console.log(typeof A, A);

// 3. Bigint
// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
let bigNo = 1234567890123456789012345n;
let bigNo2 = 1234567890123456789012345n;
let bigNoResult = bigNo + bigNo2;
console.log(bigNoResult);
console.log( typeof bigNo, bigNo);

// 4. Boolean
// Booleans can only have two values: true or false.
let boo = 5 == 6;
let boo2 = 5 == 5;
console.log(typeof boo, boo);
console.log(typeof boo2, boo2);

// 5. Undefined
// In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

let car;
 car = undefined;
console.log( car);

// An empty value has nothing to do with undefined.
// An empty string has both a legal value and a type.
let newcar2 = '';
console.log(typeof newcar2);

// 6. Null
// The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

let nothing = null;
// let joe = 'Joe';
// let nothing = joe
console.log( nothing);
console.log(typeof nothing);

// 7. Object
// Real Life Objects, Properties, and Methods
// In real life, a car is an object.
// A car has properties like weight and color, and methods like start and stop:
// All cars have the same properties, but the property values differ from car to car.
// All cars have the same methods, but the methods are performed at different times.

const newCar = {type: 'Toyota', model: 'Camry', color: 'Blue'};
console.log(typeof newCar,newCar);

// we can also have spaces in our objects
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// Accessing Object Properties
// You can access object properties in two ways:
// objectName.propertyName;
// objectName["propertyName"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const personsFirstname = person.firstName;
console.log(personsFirstname);
const personsLastName = person['lastName']
console.log(personsLastName);

//1. write an object of two players properties in a football team of your choice, including their firstname, lastname, team, age, eyecolor, birthdate.

//2. then access the first players firstname, lastname, team and birthdate, and log it to the console using the objectName.propertyName
//3. do the same thing for the second player but access it's value using the square bracket

// Arrays
// An array is a special variable, which can hold more than one value:
// It is a common practice to declare arrays with the const keyword.
// Spaces and line breaks are not important. A declaration can span multiple lines:
const car1 = 'Saab';
const car2 = 'Volvo';
const car3 = 'BMW';

const cars = [
    "Saab",
    "Volvo",
    "BMW",
];
console.log(typeof cars);

const newCars = [];
newCars[0] = 'Mercedes Benz'
newCars[1] = 'Lexus'
newCars[2] = 'Porshe'
newCars[3] = 'Lamboghini'
console.log(newCars);

const carsLength = newCars.length
console.log(carsLength);

const newArr = ['Chelsea', 'Crystal-palace', 'Real-Madrid', 'Arsenal', 'EyimbaFc', 'Barcelona']

console.log(newArr);
const team2 = newArr[1]
console.log(team2);
const team1 = newArr[0]
console.log(team1);

// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const newArrToString = newArr.toString()
console.log(typeof newArrToString ,newArrToString);

// difference between arrays and objects
// Arrays use numbers to access its "elements". In this example, newArray[0] returns firstIndex:

const newArray = ["firstIndex", "secondIndex", "thirdIndex"];
let numberAccess = newArray[2];
console.log(numberAccess);

//  Objects use names to access its "members". In this example, person.firstName returns John:

const randomPerson = { firstName: "John", lastName: "Doe", age: 46 };
let personAccess = randomPerson.firstName;
let personAccess2 = randomPerson['lastName']
console.log(personAccess);
console.log(personAccess2);

// Accessing the First Array Element
const anotherArray = ["firstIndex", "secondIndex", "thirdIndex"];
let firstArray = anotherArray[0];
console.log(firstArray);

// Accessing the Last Array Element
let lastArray = anotherArray[anotherArray.length -1]
console.log(lastArray);

//1, write an array of 8 different types of countries, then access each array using the index
// 2, replace the second and fourth items in the array with two new countries
// 3, log to the console the cuurent content we have in the array, and also the length of the array
// 4, access the first and the last array and then log it to the console


const countries = ['Nigeria', 'Togo', 'Ghana', 'Niger', 'France', 'Russia', 'America', 'Korea'];
// first task
console.log(countries);
const firstCountry = countries[0];
console.log(firstCountry);
const secondCountry = countries[1];
console.log(secondCountry);
const thirdCountry = countries[2];
console.log(thirdCountry);
const fourthCountry = countries[3];
console.log(fourthCountry);
const fifthCountry = countries[4];
console.log(fifthCountry);
const sixthCountry = countries[5];
console.log(sixthCountry);
const seventhCountry = countries[6];
console.log(seventhCountry);
const eightCountry = countries[7];
console.log(eightCountry);

// second task
countries[1] = 'Canada';
countries[3] = 'Japan';
console.log(countries);

// third task
console.log(countries);
const countriesLength = countries.length;
console.log(countriesLength);

// fourth task
const theFirstCountry = countries[0]
const theLastCountry = countries[countries.length -1]
console.log(theFirstCountry);
console.log(theLastCountry);


// Useful Javascript array methods

// pop and push
// shift and unshift
// index of
// concat
// spread operators

// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.
// Popping items out of an array, or pushing items into an array.

// JavaScript Array pop()
// The pop() method removes the last element from an array:

const newFruits = ["Banana", "Orange", "Apple", "Mango"];
let poppedOutFruit = newFruits.pop();
console.log(poppedOutFruit);
console.log(newFruits);

poppedOutFruit = newFruits.pop();
console.log(poppedOutFruit);
console.log(newFruits);

// JavaScript Array push()
// The push() method adds a new element to an array (at the end):

const thisfruits = ["Banana", "Orange", "Apple", "Mango"];
let pushedInFruits = thisfruits.push("Kiwi");
console.log(pushedInFruits);
console.log(thisfruits);
pushedInFruits = thisfruits.push("Pineapple");
console.log(thisfruits);

// shift and unshift
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruitees = ["Banana", "Orange", "Apple", "Mango"];
fruitees.shift();
console.log(fruitees);
fruitees.shift();
console.log(fruitees);

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

const fruited = ["Banana", "Orange", "Apple", "Mango"];
fruited.unshift("Lemon");
console.log(fruited);
fruited.unshift("PineApple");
console.log(fruited);


// Merging (Concatenating) Arrays
// The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// The concat() method does not change the existing arrays. It always returns a new array.
// The concat() method can take any number of array arguments:

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myNewChildren = arr1.concat(arr2, arr3);
console.log(myNewChildren);

// The concat() method can also take strings as arguments: but it adds it just like your push, to the end of the array

const arry1 = ["Emil", "Tobias", "Linus"];
let myArry1Children = arry1.concat("Peter", "daniel");
console.log(myArry1Children);

// The Spread Operator
// The JavaScript spread operator (...) expands an iterable (like an array) into more elements.
// This allows us to quickly copy all or parts of an existing array into another array:

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

console.log(numbersCombined);

// The spread operator is often used to extract only what's needed from an array:
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(numbers);

// We can use the spread operator with objects too:

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "blue",
};

const updateMyVehicle = {
  type: "car",
  model: 'Explorer',
  year: 2021,
  color: "Black",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);

// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now Black.

// Assignment

// 1, create an empty array, then assign it to a constant variable carBrands
// 2, use the array push method to push in 4 different car brands to the empty array.
// 3, pop out one car brand from the array, and also shift one item from the array
// 4, unshift 4 new car brands to the carBrands array
// 5, create a new empty color array, then unshift 3 colors to the color array, and also push 5 colors to the color array.
// 6, create a new variable then add the carBrands array with the color array using the spread operator.
// Guide:- log each task to the console. from task 1 - 6

